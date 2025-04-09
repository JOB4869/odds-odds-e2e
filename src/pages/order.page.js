import { Page } from "@playwright/test";

export class orderPage {
    baseUrl = "https://odds-odds-shop.onrender.com/users";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorBuyNowsPathButton = "[data-testid='buy-nows-path-button']";

    locatorBuyNowIndexTitle = "[data-testid='buy-now-index-title']";
    locatorBuyNowIndexProductName = "[data-testid='buy-now-index-product-name']";

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
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

    async fillBuyNowsPathButton() {
        await this.page.click(this.locatorBuyNowsPathButton);
    } 

    async getBuyNowIndexTitle() {
        return await this.page.textContent(this.locatorBuyNowIndexTitle);
    }

    async getBuyNowIndexProductName() {
        return await this.page.textContent(this.locatorBuyNowIndexProductName);
    }
}