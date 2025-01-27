const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

async function generateFavicons() {
  const svgBuffer = await fs.readFile('public/favicon.svg');
  
  // Generate favicon.ico (32x32)
  await sharp(svgBuffer)
    .resize(32, 32)
    .toFormat('png')
    .toFile('public/icon.png');
  
  // Generate apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .toFormat('png')
    .toFile('public/apple-icon.png');
  
  console.log('Favicons generated successfully!');
}

generateFavicons().catch(console.error); 