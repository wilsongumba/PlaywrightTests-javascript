const { test, expect } = require('@playwright/test');

test('alerts', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');

    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');


    // enter text and accept dialog
    page.once('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept('my text is this');
    });
    await page.click('#promtButton');

    const result = `[id="promptResult"]`;
    expect(await page.innerText(result)).toBe('You entered my text is this');
});
