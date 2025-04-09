import { Page } from "@playwright/test";

export class deleteProductsPage {
    baseUrl = "https://odds-odds-shop.onrender.com/users    ";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";
    
    locatorProductsPathButton = "[data-testid='products-path-button']";
    locatorProductIndexDeleteProductLink = "[data-testid='product-index-delete-product-link']";


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

    async fillProductsPathButton() {
        await this.page.click(this.locatorProductsPathButton);
    }

    async fillProductIndexDeleteProductLink() {
        await this.page.click(this.locatorProductIndexDeleteProductLink);
    }
}