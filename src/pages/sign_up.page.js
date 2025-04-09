import { Page } from "@playwright/test";

export class signUpPage {

    baseUrl = "https://odds-odds-shop.onrender.com/sign_up";
    baseUrl2 = "https://odds-odds-shop.onrender.com/additional_info";
    
    locatorUsername = "[data-testid='email-signup-input']";
    locatorPassword = "[data-testid='password-signup-input']";
    locatorConfirmPassword = "[data-testid='confirm-password-signup-input']";
    locatorSignupButton = "[data-testid='signup-button']";

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async goto2() {
        await this.page.goto(this.baseUrl2);
    }

    async fillUserPassword(username, password, confirmPassword) {
        await this.page.locator(this.locatorUsername).fill(username);
        await this.page.locator(this.locatorPassword).fill(password);
        await this.page.locator(this.locatorConfirmPassword).fill(confirmPassword); 
    }
    
    async clickSignupButton() {
        await this.page.click(this.locatorSignupButton);
    }

    async getUsername() {
        return await this.page.locator(this.locatorUsername).inputValue();
    }

    async getPassword() {
        return await this.page.locator(this.locatorPassword).inputValue();
    }

    async getConfirmPassword() {
        return await this.page.locator(this.locatorConfirmPassword).inputValue();
    }

    async getSignupButton() {
        return await this.page.locator(this.locatorSignupButton);
    }
 }