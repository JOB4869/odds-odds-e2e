import { Page } from "@playwright/test";

export class showPasswordPage {

    baseUrl = "https://odds-odds-shop.onrender.com/sign_in";
    baseUrlSignup = "https://odds-odds-shop.onrender.com/sign_up";
    baseUrlChangePassword = "https://odds-odds-shop.onrender.com/password";

    locatorPassword = "[data-testid='password-login-input']";
    locatorPasswordSignup = "[data-testid='password-signup-input']";
    locatorPasswordChangePassword = "[data-testid='change-password-input']";
    locatorPasswordChangePasswordConfirmation = "[data-testid='change-password-confirmation-input']";

    locatorShowPasswordInput = "[data-testid='show-password-input']";
    locatorShowPasswordSignupInput = "[data-testid='show-password-signup-input']";
    locatorShowPasswordChangePasswordInput = "[data-testid='change-password-show-password-input']";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async gotoSignup() {
        await this.page.goto(this.baseUrlSignup);
    }

    async gotoChangePassword() {
        await this.page.goto(this.baseUrlChangePassword);
    }

    async fillUsername(username) {
        await this.page.fill(this.locatorUsername, username);
    }

    async fillPassword(password) {
        await this.page.fill(this.locatorPassword, password);
    }

    async fillLoginButton() {
        await this.page.click(this.locatorLoginButton);
    }

    async fillPasswordSignup(password) {
        await this.page.fill(this.locatorPasswordSignup, password);
    }

    async fillPasswordChangePassword(password) {
        await this.page.fill(this.locatorPasswordChangePassword, password);
    }

    async fillPasswordChangePasswordConfirmation(password) {
        await this.page.fill(this.locatorPasswordChangePasswordConfirmation, password);
    }

    async fillShowPasswordInput(password) {
        await this.page.click(this.locatorShowPasswordInput);
    }

    async fillShowPasswordSignupInput(password) {
        await this.page.click(this.locatorShowPasswordSignupInput);
    }

    async fillShowPasswordChangePasswordInput(password) {
        await this.page.click(this.locatorShowPasswordChangePasswordInput);
    }


    async getPassword() {
        return await this.page.inputValue(this.locatorPassword);
    }

    async getPasswordSignup() {
        return await this.page.inputValue(this.locatorPasswordSignup);
    }

    async getPasswordChangePassword() {
        return await this.page.inputValue(this.locatorPasswordChangePassword);
    }        

    async getPasswordChangePasswordConfirmation() {
        return await this.page.inputValue(this.locatorShowPasswordChangePasswordConfirmationInput);
    }
}