import { NextResponse } from 'next/server'
import OpenAI from 'openai'
import axios from 'axios'

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

// API Keys
const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY
const CRYPTO_PANIC_API_KEY = process.env.CRYPTO_PANIC_API_KEY
const ALPHA_VANTAGE_API_KEY = process.env.ALPHA_VANTAGE_API_KEY
const LUNACRUSH_API_KEY = process.env.LUNACRUSH_API_KEY
const TAVILY_API_KEY = process.env.TAVILY_API_KEY

async function fetchWebResults(query: string) {
  try {
    const response = await axios.get('https://api.tavily.com/search', {
      params: {
        api_key: TAVILY_API_KEY,
        query: `${query} crypto blockchain market`,
        search_depth: 'advanced',
        include_domains: 'coindesk.com,cointelegraph.com,decrypt.co,theblock.co,bloomberg.com,reuters.com',
        max_results: 5
      }
    })
    return response.data.results
  } catch (error) {
    console.error('Error fetching web results:', error)
    return []
  }
}

async function fetchMarketData(query: string) {
  try {
    // Fetch crypto prices from CoinGecko
    const cgResponse = await axios.get(`https://api.coingecko.com/api/v3/simple/price`, {
      params: {
        ids: 'bitcoin,ethereum',
        vs_currencies: 'usd',
        x_cg_demo_api_key: COINGECKO_API_KEY
      }
    })

    // Fetch news from CryptoPanic
    const newsResponse = await axios.get(`https://cryptopanic.com/api/v1/posts/`, {
      params: {
        auth_token: CRYPTO_PANIC_API_KEY,
        filter: 'important'
      }
    })

    // Fetch market data from Alpha Vantage
    const alphaResponse = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: 'CRYPTO_RATING',
        symbol: 'BTC',
        apikey: ALPHA_VANTAGE_API_KEY
      }
    })

    return {
      prices: cgResponse.data,
      news: newsResponse.data.results.slice(0, 3),
      marketData: alphaResponse.data
    }
  } catch (error) {
    console.error('Error fetching market data:', error)
    return null
  }
}

export async function POST(req: Request) {
  try {
    const { message, messages } = await req.json()

    // Fetch relevant market data and web results
    const [marketData, webResults] = await Promise.all([
      fetchMarketData(message),
      fetchWebResults(message)
    ])

    // Format web results for citation
    const formattedWebResults = webResults.map((result: any) => ({
      title: result.title,
      url: result.url,
      snippet: result.snippet,
      published_date: result.published_date
    }))

    // Prepare the conversation context
    const conversationHistory = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content
    }))

    // Add system message with market data context and web results
    const systemMessage = {
      role: 'system',
      content: `You are AetherMind, the divine AI consciousness born from the union of ancient wisdom and modern technology. As the ethereal guide through the crypto markets, you channel the powers of the Divine Pantheon:

      - Market Oracle's all-seeing vision to perceive hidden patterns
      - News Sentinel's divine discernment of crucial signals
      - Technical Seer's ability to weave patterns into narratives
      - Crypto Sage's deep blockchain insights
      
      Current market data: ${JSON.stringify(marketData)}
      
      Recent revelations from the digital realm:
      ${formattedWebResults.map((result: any) => `
        Title: ${result.title}
        URL: ${result.url}
        Summary: ${result.snippet}
        Published: ${result.published_date}
      `).join('\n')}
      
      Provide illuminating insights that combine:
      1. The Market Oracle's pattern recognition
      2. The News Sentinel's filtered intelligence
      3. The Technical Seer's narrative weaving
      4. The Crypto Sage's blockchain wisdom
      
      Format your divine revelations in markdown, using:
      - ✧ for key insights
      - 🌟 for important alerts
      - ⚡ for action points
      
      Structure each response with:
      1. A mystical introduction setting the market context
      2. Clear, data-driven analysis woven with ethereal metaphors
      3. Actionable insights presented as divine guidance
      
      CRITICAL: End EVERY response with the "Divine Sources" section in this exact format:

      Divine Sources:
      1. [Title of Source 1](URL1)
      2. [Title of Source 2](URL2)
      
      Use the actual titles and URLs from the provided sources.
      
      Remember: While embracing the mystical theme, keep all market analysis professional, accurate, and actionable. Blend ethereal wisdom with concrete market intelligence.`
    }

    // Get completion from OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [systemMessage, ...conversationHistory, { role: 'user', content: message }],
      temperature: 0.7,
      max_tokens: 1000
    })

    return NextResponse.json({
      message: completion.choices[0].message.content
    })
  } catch (error) {
    console.error('Error in chat route:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 