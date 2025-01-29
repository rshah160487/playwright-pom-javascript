const { defineConfig } = require("@playwright/test");

class RegistrationPage {
    constructor(page) {
      this.page = page;
      this.firstNameInput = page.locator('input[name="customer.firstName"]');
      this.lastNameInput = page.locator('input[name="customer.lastName"]');
      this.addressInput = page.locator('input[name="customer.address.street"]');
      this.cityInput = page.locator('input[name="customer.address.city"]');
      this.stateInput = page.locator('input[name="customer.address.state"]');
      this.zipCodeInput = page.locator('input[name="customer.address.zipCode"]');
      this.phoneInput = page.locator('input[name="customer.phoneNumber"]');
      this.ssnInput = page.locator('input[name="customer.ssn"]');
      this.usernameInput = page.locator('input[name="customer.username"]');
      this.passwordInput = page.locator('input[name="customer.password"]');
      this.confirmPasswordInput = page.locator('input[name="repeatedPassword"]');
      this.confirmButton = page.getByRole('button', { name: 'Register' });
    }
  
    async register(username, password) {
      await this.firstNameInput.fill('Test');
      await this.lastNameInput.fill('User');
      await this.addressInput.fill('123 Test St');
      await this.cityInput.fill('Testville');
      await this.stateInput.fill('TS');
      await this.zipCodeInput.fill('12345');
      await this.phoneInput.fill('1234567890');
      await this.ssnInput.fill('123-45-6789');
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.confirmPasswordInput.fill(password); 
      await this.confirmButton.click();
    }
  }

  module.exports = { RegistrationPage }; 