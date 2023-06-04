const { test, expect } = require('@playwright/test');

test('checkbox elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  await expect(page).toHaveTitle(/The Internet/);

  const checkbox = await page.$$('[type="checkbox"]');

  await checkbox[0].check();
  await checkbox[1].uncheck();
});

test('radio elements', async ({ page }) => {
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
  await expect(page).toHaveTitle(/How To Create a Custom Checkbox and Radio Buttons/);

  const checkbox = await page.$$('[type="checkbox"]');
  const radios = await page.$$('[type="radio"]');
  await radios[1].check();
});
