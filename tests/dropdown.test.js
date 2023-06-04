const { test, expect } = require('@playwright/test');

test('dropdown elements', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dropdown');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/The Internet/);


  const dropdown = await page.$('#dropdown');

  // value 
  await dropdown.selectOption({ value: '1' });

  // label
  await dropdown.selectOption({ label: 'Option 2' });

  // index
  await dropdown.selectOption({ index: 1 });

  // values inside this select
  const availableOptions = await dropdown.$$('option');

  for (let i = 0; i < availableOptions.length; i++) {
    console.log(await availableOptions[i].innerText());
  }
});
