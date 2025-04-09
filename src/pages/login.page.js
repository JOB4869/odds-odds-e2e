import { Page } from "@playwright/test";

export class loginPage {

    baseUrl = "https://odds-odds-shop.onrender.com/sign_in";
    homeUrl = "https://odds-odds-shop.onrender.com/";
    
    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorUsersIcon = "[data-testid='footer-users-link']";
    locatorBeersIcon = "[data-testid='footer-beers-link']";
    locatorCartIcon = "[data-testid='footer-cart-link']";

    locatorUsersPage = "[data-testid='user-index-title']";
    locatorBeersPage = "[data-testid='beer-index-title']";
    locatorCartPage = "[data-testid='cart-show-title']";

    /*
    @param {Page} page
    */
    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async gotoHome() {
        await this.page.goto(this.homeUrl);
    }


    async fillUserPassword(username, password) {
        await this.page.locator(this.locatorUsername).fill(username);
        await this.page.locator(this.locatorPassword).fill(password);
    }

    async clickLoginButton() {
        await this.page.click(this.locatorLoginButton);
    }

    async getUsername() {
        return await this.page.locator(this.locatorUsername).inputValue();
    }
    async getPassword() {
        return await this.page.locator(this.locatorPassword).inputValue();
    }

    async getUsersPage() {
        return await this.page.locator(this.locatorUsersPage);
    }
}