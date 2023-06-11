// @ts-check
const { test, chromium } = require('@playwright/test');

test('record video', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    recordVideo: { dir: `./test-results/recordings` },
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
});
