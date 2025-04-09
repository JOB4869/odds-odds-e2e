import { Page } from "@playwright/test";

export class beersPage {

    baseUrl = "https://odds-odds-shop.onrender.com/";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorBuyNowButton = "[data-testid='buy-now-new-submit-button']";

    locatorProductBeerCheckOutButton = "[data-testid='product-beer-check-out-button']";
    locatorCheckOutBeerConfirmButton = "[data-testid='check-out-beer-confirm-button']";

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

    async clickBuyNowButton() {
        await this.page.click(this.locatorBuyNowButton);
    }

    async clickProductBeerCheckOutButton() {
        await this.page.click(this.locatorProductBeerCheckOutButton);
    }

    async clickCheckOutBeerConfirmButton() {
        await this.page.click(this.locatorCheckOutBeerConfirmButton);
    }
}