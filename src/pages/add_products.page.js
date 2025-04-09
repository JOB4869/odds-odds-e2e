import { Page } from "@playwright/test";

export class addProductsPage {
    baseUrl = "https://odds-odds-shop.onrender.com/users    ";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";
    
    locatorProductsPathButton = "[data-testid='products-path-button']";
    locatorProductIndexAddProductLink = "[data-testid='product-index-add-product-link']";

    locatorProductNameInput = "[data-testid='product-name-input']";
    locatorProductDescriptionInput = "[data-testid='product-description-input']";
    locatorProductPriceInput = "[data-testid='product-price-input']";
    locatorProductSubmitButton = "[data-testid='product-submit-button']";

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

    async fillProductIndexAddProductLink() {
        await this.page.click(this.locatorProductIndexAddProductLink);
    }

    async fillProductNameInput(productName) {
        await this.page.fill(this.locatorProductNameInput, productName);
    }

    async fillProductDescriptionInput(productDescription) {
        await this.page.fill(this.locatorProductDescriptionInput, productDescription);
    }

    async fillProductPriceInput(productPrice) {
        await this.page.fill(this.locatorProductPriceInput, productPrice);
    }

    async fillProductSubmitButton() {
        await this.page.click(this.locatorProductSubmitButton);
    } 
}