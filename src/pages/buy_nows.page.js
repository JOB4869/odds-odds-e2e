import { Page } from "@playwright/test";

export class buyNowsPage {
    baseUrl = "https://odds-odds-shop.onrender.com/";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorPurchaseButton = "[data-testid='button-product-purchase-button']";

    locatorPurchaseAddressMethodCurrentAddressInput = "[data-testid='purchase-address-method-current-address-input']";
    locatorPurchaseAddressMethodTipcoAddressInput = "[data-testid='purchase-address-method-tipco-address-input']";
    locatorPurchasePaymentMethodCashOnDeliveryInput = "[data-testid='purchase-payment-method-cash-on-delivery-input']";
    locatorPurchasePaymentMethodPromptpayInput = "[data-testid='purchase-payment-method-promptpay-input']";
    locatorPurchaseConfirmButton = "[data-testid='purchase-confirm-button']";

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
    
    async fillPurchaseButton() {
        await this.page.click(this.locatorPurchaseButton);
    }

    async fillPurchaseAddressMethodCurrentAddressInput() {
        await this.page.click(this.locatorPurchaseAddressMethodCurrentAddressInput);
    }

    async fillPurchaseAddressMethodTipcoAddressInput() {
        await this.page.click(this.locatorPurchaseAddressMethodTipcoAddressInput);
    }

    async fillPurchasePaymentMethodCashOnDeliveryInput() {
        await this.page.click(this.locatorPurchasePaymentMethodCashOnDeliveryInput);
    }

    async fillPurchasePaymentMethodPromptpayInput() {
        await this.page.click(this.locatorPurchasePaymentMethodPromptpayInput);
    }

    async fillPurchaseConfirmButton() {
        await this.page.click(this.locatorPurchaseConfirmButton);
    } 
}