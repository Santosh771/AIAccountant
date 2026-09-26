import {test, expect} from '@playwright/test';
test('Login test', async ({ page }) => {
// Navigate to the login page
    await page.goto('https://app.aiaccountant.com/');   

    // Fill in the login  email
await page.locator("#email").fill("example@gmail.com");
    // Fill in the login password
    await page.locator("#password").fill("021997Rp@");

    // Click the login button
    await page.getByRole('button', { name: 'Log in' }).click();

})


 test.only('Login test with invalid credentials', async ({ page }) => {

await page.goto('https://app.aiaccountant.com/');
// Fill in the login email with invalid credentials
await page.locator("#email").fill("test97@gmail.com");
    // Fill in the login password with invalid credentials
await page.locator("#password").fill("invalidpassword");
    // Click the login button
await page.getByRole('button', { name: 'Log in' }).click(); 


 })
 
