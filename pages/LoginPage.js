//@ts-check

const { defineConfig } = require("@playwright/test");

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('input[type="submit"]');
        this.errorMessage = page.locator('//p[@class="error"]');
        this.registerLink = page.getByRole('link', { name: 'Register' })
        this.logoutButton = page.getByLabel("Log Out");
      }
    
      async navigate() {
        await this.page.goto('');
      }
    
      async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
      }

      async isErrorVisible() {
        return await this.errorMessage.isVisible();
      }

      async clickRegisterLink(){
        await this.registerLink.click();
      }

      async getErrorMessage(){
        if (await this.errorMessage.isVisible()) {
          return await this.errorMessage.textContent();
        }
        return null;
      }

      async logout(){
        if (await this.logoutButton.isVisible()) {
          await this.logoutButton.click();
        }
      }

} 

module.exports = { LoginPage }; 