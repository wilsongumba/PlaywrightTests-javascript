// @ts-check
const { test, expect } = require('@playwright/test');

test('has title google', async ({ page }) => {
  await page.goto('http://google.com');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Google/);
});
