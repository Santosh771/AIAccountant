import{test,expect} from '@playwright/test';
test('needs review tab test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://app.aiaccountant.com/');
   
    // Fill in the login  email
  await page.locator("#email").fill("example@gmail.com");
    // Fill in the login password
  await page.locator("#password").fill("password123");

    // Click the login button
    await page.getByRole('button', { name: 'Log in' }).click();

   await page.locator('#tabs-button-needsReview').click();

   //click on search button
    await page.getByPlaceholder('Search bills').click();
//fill the search button
await page.getByPlaceholder('Search bills').fill('vendor');
//click on upload bills button
await page.locator('button:has-text("Upload Bills")').click();

 await page.getByText('Drop your files or browse').click();

  await page.getByTestId('bulk_uploads-input-file').setInputFiles('SantoshQA2026.pdf');

  await page.locator('div').filter({ hasText: /^Bulk Upload Bills$/ }).click();

  await page.getByRole('button', { name: 'Cancel' }).click();

  await page.getByTestId('top-bar-button-sync').click();

});


 