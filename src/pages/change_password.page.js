import { Page } from "@playwright/test";

export class changePasswordPage {

    baseUrl = "https://odds-odds-shop.onrender.com/";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorEditPasswordPathButton = "[data-testid='edit-password-path-button']";

    locatorChangePasswordInput = "[data-testid='change-password-input']";
    locatorChangePasswordConfirmationInput = "[data-testid='change-password-confirmation-input']";         
    locatorChangePasswordSubmitButton = "[data-testid='change-password-submit-button']";


    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async fillUserPassword(username, password) {
        await this.page.fill(this.locatorUsername, username);
        await this.page.fill(this.locatorPassword, password);
    }

    async clickLoginButton() {
        await this.page.click(this.locatorLoginButton);
    }

    async clickEditPasswordPathButton() {
        await this.page.click(this.locatorEditPasswordPathButton);
    }

    async fillChangePasswordInput(password) {
        await this.page.fill(this.locatorChangePasswordInput, password);
    }

    async fillChangePasswordConfirmationInput(password) {
        await this.page.fill(this.locatorChangePasswordConfirmationInput, password);
    }   

    async clickChangePasswordSubmitButton() {
        await this.page.click(this.locatorChangePasswordSubmitButton);
    }
    
}