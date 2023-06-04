// @ts-check
const { test, expect } = require('@playwright/test');

test('type into textbox', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/forgot_password');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);

  // code to type in email textbox
  const email = '[id="email"]';

  await page.fill(email, 'ixchel@mail.com');
});
