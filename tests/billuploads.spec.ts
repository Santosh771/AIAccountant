import {test, expect} from '@playwright/test';

test('upload bills test', async ({ page }) =>
   {
    // Navigate to the login page
   await page.goto('https://app.aiaccountant.com/');
   
    // Fill in the login  email
   await page.locator("#email").fill("example@gmail.com");
    // Fill in the login password
   await page.locator("#password").fill("password123");

    // Click the login button
    await page.getByRole('button', { name: 'Log in' }).click();

   // navigate to bills upload page
   await page.locator('#tabs-button-billUploads').click();
    //search bill by name
    await page.getByPlaceholder('Search by bill name').click();

    //click on status dropdown
   await page.locator('small:has-text("Status")').click();

    const statusDropdown = await page.getByRole('presentation');
    //click on completed status
    await statusDropdown.getByTestId('status-option-3').click();
    //click on in progress option
    await statusDropdown.getByTestId('status-option-2').click();
    // click on split option
     await statusDropdown.getByTestId('status-option-1').click();

      await page.waitForTimeout(2000); // Wait for 2 seconds
     // to clear the status filter
     await page.getByText('Clear Selection', { exact: true }).click();


  });