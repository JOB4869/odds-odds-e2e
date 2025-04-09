import { Page } from "@playwright/test";

export class logOutPage {

    baseUrl = "https://odds-odds-shop.onrender.com/";
    usersUrl = "https://odds-odds-shop.onrender.com/users";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorSignOutModalButton = "[data-testid='sign-out-modal-button']";
    locatorConfirmSignOutButton = "[data-testid='confirm-sign-out-button']";
    
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async gotoUsers() {
        await this.page.goto(this.usersUrl);
    }

    async fillUserPassword(username, password) {
        await this.page.fill(this.locatorUsername, username);
        await this.page.fill(this.locatorPassword, password);
    }

    async clickLoginButton() {
        await this.page.click(this.locatorLoginButton);
    }

    async clickSignOutModalButton() {
        await this.page.click(this.locatorSignOutModalButton);
    }

    async clickConfirmSignOutButton() {
        await this.page.click(this.locatorConfirmSignOutButton);
    }
    
}