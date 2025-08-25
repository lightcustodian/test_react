# Puppeteer Testing & Troubleshooting

## Overview
This project uses Puppeteer for automated browser testing and validation of the Next.js application.

## Installation
```bash
npm install puppeteer --save-dev
```

## Basic Test Script
```javascript
const puppeteer = require('puppeteer');

async function testApplication() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 800 });
    
    const response = await page.goto('http://localhost:2000', {
      waitUntil: 'networkidle2',
      timeout: 30000
    });
    
    console.log(`HTTP Status: ${response.status()}`);
    await page.screenshot({ path: 'homepage-test.png', fullPage: true });
    
  } finally {
    await browser.close();
  }
}

testApplication();
```

## Common Issues & Solutions

### 1. ES Module Errors
If you get "require is not defined" errors, rename your test file from `.js` to `.cjs`:
```bash
mv test-browser.js test-browser.cjs
```

### 2. Timeout Issues
Increase timeout for slow loading pages:
```javascript
await page.goto('http://localhost:2000', {
  waitUntil: 'networkidle2',
  timeout: 60000  // 60 seconds
});
```

### 3. Element Not Found
Wait for elements to load:
```javascript
await page.waitForSelector('nav', { timeout: 10000 });
```

### 4. Screenshot Issues
Ensure directory exists and has write permissions:
```javascript
await page.screenshot({ 
  path: './screenshots/test.png', 
  fullPage: true 
});
```

## Testing Checklist
- [ ] Homepage loads (HTTP 200)
- [ ] Navigation elements present
- [ ] No JavaScript errors
- [ ] Interactive features work
- [ ] Screenshots captured
- [ ] Performance metrics recorded

## Performance Testing
```javascript
const metrics = await page.metrics();
console.log('Performance metrics:', metrics);
```

## Integration with CI/CD
For GitHub Actions or similar:
```yaml
- name: Install dependencies
  run: npm ci
  
- name: Start server
  run: npm run dev &
  
- name: Run Puppeteer tests
  run: node test-browser.cjs
```