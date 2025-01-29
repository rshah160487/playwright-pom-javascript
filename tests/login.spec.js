const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { RegistrationPage } = require('../pages/RegistrationPage');

test.describe('Banking Application Login Tests', () => {
  
  test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
    await loginPage.navigate();
  });

  test.afterEach(async ({ page }) => {
    // Cleanup logic (if any, like logging out)
    const loginPage = new LoginPage(page);
      await loginPage.logout();
  });

  test('Valid Customer Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registrationPage = new RegistrationPage(page);
    const username = test.info().project.use.username;
    const password = test.info().project.use.password;
    
    await loginPage.login(username, password);
    await page.waitForLoadState("load", "domcontentloaded");
    if (await loginPage.isErrorVisible()) {
      console.log('Login failed. Attempting to register and retry.');
      await loginPage.clickRegisterLink();
      await registrationPage.register(username, password);
      await loginPage.logout();
      await loginPage.navigate();
      await loginPage.login(username, password);
    }
      await expect(page).toHaveURL(/overview/);
  });

  test('Invalid Customer Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
  
    await loginPage.login('invalidUser', 'invalidPass');
    const error = await loginPage.getErrorMessage();
    if (error) {
      if (error.includes('The username and password could not be verified')) {
        console.log('Login failed: Invalid username or password. Registering a new account.');
        await expect(loginPage.errorMessage).toContainText('The username and password could not be verified');
      } else if (error.includes('internal error')) {
        console.log('Login failed: Internal error encountered.');
        throw new Error('Internal error during login. Please try again later.');
      }
    }  
  })
});