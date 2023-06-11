// @ts-check
const { test } = require('@playwright/test');

test('take page in view, full page and element screenhots', async ({ page }) => {
  await page.goto('https://applitools.com/');

  // take page in view screenshot
  await page.screenshot({ path: 'test-results/screenshots/screenshot.png' });

  // take screenshot of an element
  const logo = await page.$('.logo');
  await logo.screenshot({ path: 'test-results/screenshots/logo.png' });

  // take screenshot of full page (long page)
  await page.screenshot({ path: 'test-results/screenshots/fullpage.png', fullPage: true });
});
