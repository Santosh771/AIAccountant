import { test, expect } from '@playwright/test';
test('All bills test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://app.aiaccountant.com/');
   await page.waitForTimeout(2000); // Wait for 2 seconds
    // Fill in the login  email
  await page.locator("#email").fill("example@gmail.com");
    // Fill in the login password
  await page.locator("#password").fill("password123");

    // Click the login button
    await page.getByRole('button', { name: 'Log in' }).click();
//navigate to all bills
   await page.locator('#tabs-button-allBills').click();
   //click on search button
   await page.getByTestId('set-filter-button').click(); 


 await page.getByTestId('total-amount-filter-tab').click();

   await page.locator("#amount-input").fill("1000");
  await page.getByRole('switch').click();
 await  page.getByText('Outstanding Amount', { exact: true })
 await page.getByTestId('vendor-uuid-filter-tab').click();
 
});