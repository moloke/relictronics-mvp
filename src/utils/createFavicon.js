import { createCanvas, registerFont } from 'canvas';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Register the BEAMS font
registerFont(join(__dirname, '../assets/Beams.ttf'), { family: 'BEAMS' });

// Configuration - adjust these values to fine-tune the logo
const config = {
  width: 230,
  height: 60,
  rFontSize: 36,
  textFontSize: 36,
  rXPosition: 10,
  textXPosition: {
    png: 46,  // X position for "elictronics" in PNG
    svg: 46   // X position for "elictronics" in SVG
  },
  rYPosition: 30,
  textYPosition: {
    png: 32,  // Y position for "elictronics" in PNG
    svg: 36   // Y position for "elictronics" in SVG
  },
  systemFont: 'ui-sans-serif, system-ui, sans-serif',
  emeraldColor: '#059669',
};

// Function to create PNG logo
function createPNGLogo(filename, backgroundColor, rColor, textColor) {
  const canvas = createCanvas(config.width, config.height);
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Draw "R" in BEAMS font
  ctx.fillStyle = rColor;
  ctx.font = `${config.rFontSize}px BEAMS`;
  ctx.textBaseline = 'middle';
  ctx.fillText('R', config.rXPosition, config.rYPosition);

  // Draw "elictronics" in system font - now bold
  ctx.fillStyle = textColor;
  ctx.font = `bold ${config.textFontSize}px ${config.systemFont}`;
  ctx.fillText('elictronics', config.textXPosition.png, config.textYPosition.png);

  // Save the PNG
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(join(__dirname, `../../public/${filename}`), buffer);
  console.log(`${filename} created successfully!`);
}

// Function to create SVG logo
function createSVGLogo(filename, backgroundColor, rColor, textColor) {
  // Base64 encode the BEAMS font for SVG embedding
  const fontPath = join(__dirname, '../assets/Beams.ttf');
  const fontBuffer = fs.readFileSync(fontPath);
  const base64Font = fontBuffer.toString('base64');

  const svg = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg width="${config.width}" height="${config.height}" viewBox="0 0 ${config.width} ${config.height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      @font-face {
        font-family: 'BEAMS';
        src: url(data:font/truetype;charset=utf-8;base64,${base64Font}) format('truetype');
      }
      .logo-r { font-family: 'BEAMS'; }
      .logo-text { font-family: ${config.systemFont}; font-weight: bold; }
    </style>
  </defs>
  <rect width="100%" height="100%" fill="${backgroundColor}"/>
  <text x="${config.rXPosition}" y="${config.rYPosition}" class="logo-r" font-size="${config.rFontSize}" fill="${rColor}" dominant-baseline="middle">R</text>
  <text x="${config.textXPosition.svg}" y="${config.textYPosition.svg}" class="logo-text" font-size="${config.textFontSize}" fill="${textColor}" dominant-baseline="middle">elictronics</text>
</svg>`;

  fs.writeFileSync(join(__dirname, `../../public/${filename}`), svg);
  console.log(`${filename} created successfully!`);
}

// Create regular versions (white background)
createPNGLogo('fullLogo1.png', 'white', config.emeraldColor, 'black');
createSVGLogo('fullLogo2.svg', 'white', config.emeraldColor, 'black');

// Create inverse versions (green background)
createPNGLogo('fullLogo3.png', config.emeraldColor, 'white', 'white');
createSVGLogo('fullLogo4.svg', config.emeraldColor, 'white', 'white');

console.log('\nTo adjust positioning:');
console.log('1. Modify the textXPosition and textYPosition values in the config object:');
console.log('   - .png values for PNG files');
console.log('   - .svg values for SVG files');
console.log('2. Current values:');
console.log('   X positions:', config.textXPosition);
console.log('   Y positions:', config.textYPosition);