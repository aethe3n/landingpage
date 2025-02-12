# AetherMind Landing Page

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Security Guidelines

### API Keys and Sensitive Data
- NEVER commit API keys or sensitive data directly to the repository
- NEVER share API keys in chat or code snippets
- ALWAYS use environment variables for sensitive data
- Keep your `.env` file local and never commit it
- Use `.env.example` as a template with placeholder values

### Setting Up Environment Variables
1. Copy `.env.example` to `.env`
```bash
cp .env.example .env
```
2. Replace placeholder values in `.env` with your actual API keys
3. Add environment variables to your Vercel project settings

### Development Workflow
1. Always check that `.env` is in `.gitignore`
2. Never commit sensitive data
3. Use environment variables for all API keys
4. Regularly rotate API keys for security

### If You Accidentally Expose API Keys
1. Immediately revoke the exposed keys
2. Generate new API keys
3. Update your local `.env` file
4. Update your Vercel environment variables
5. Consider using Git filter-branch to remove sensitive data from history
