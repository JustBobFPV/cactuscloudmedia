const fs = require('fs');
const path = require('path');

// Create the portfolio directory if it doesn't exist
const portfolioDir = path.join(__dirname, '../public/images/portfolio');
if (!fs.existsSync(portfolioDir)) {
  fs.mkdirSync(portfolioDir, { recursive: true });
}

// Create placeholder SVG images
const createPlaceholderSVG = (category, index) => `
<svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#f3f4f6"/>
  <text x="400" y="300" font-family="Arial" font-size="24" fill="#4b5563" text-anchor="middle">
    ${category} Image ${index}
  </text>
</svg>
`;

// Generate placeholder images for each category
const categories = ['residential', 'commercial', 'industrial', 'land'];
categories.forEach(category => {
  const svgContent = createPlaceholderSVG(category, 1);
  fs.writeFileSync(path.join(portfolioDir, `${category}-1.jpg`), svgContent);
});

console.log('Placeholder images generated successfully!'); 