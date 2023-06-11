// @ts-check
const { test, chromium } = require('@playwright/test');

test('record .har files', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordHar: { path: `./test-results/HARFiles/generatedHarFile.har` }
  });

  const page = await context.newPage();
  // navigating to site
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

  // click on button
  await page.click('button');

  // waiting for loading animation to appear
  await page.waitForSelector('#loading');

  // and disappear
  await page.waitForSelector('#loading', { state: 'hidden' });

  await page.waitForTimeout(100);

  await context.close();
});
