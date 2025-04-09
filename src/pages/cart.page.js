import { Page } from "@playwright/test";

export class CartPage {
    baseUrl = "https://odds-odds-shop.onrender.com/";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorAddToCartButton = "[data-testid='button-product-add-to-cart-button']";
    locatorCartCount = "[data-testid='footer-cart-count']";

    locatorFooterCartLink = "[data-testid='footer-cart-link']";

    locatorCartShowRemoveItemButton = "[data-testid='cart-show-remove-item-button']";
    locatorCartShowClearCartButton = "[data-testid='cart-show-clear-cart-button']";
    locatorCartShowPurchaseAllLink = "[data-testid='cart-show-purchase-all-link']";

    locatorPurchaseAllAddressMethodCurrentAddressInput = "[data-testid='purchase-all-address-method-current-address-input']";
    locatorPurchaseAllAddressMethodTipcoAddressInput = "[data-testid='purchase-all-address-method-tipco-address-input']";
    locatorPurchaseAllPaymentMethodCashOnDeliveryInput = "[data-testid='purchase-all-payment-method-cash-on-delivery-input']";
    locatorPurchaseAllPaymentMethodPromptpayInput = "[data-testid='purchase-all-payment-method-promptpay-input']";
    locatorPurchaseAllConfirmButton = "[data-testid='purchase-all-confirm-button']";
    
    
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

    async fillAddToCartButton() {
        await this.page.click(this.locatorAddToCartButton);
    }

    async fillCartCount(count) {
        await this.page.fill(this.locatorCartCount, count.toString());
    }

    async fillFooterCartLink() {
        await this.page.click(this.locatorFooterCartLink);
    }

    async fillCartShowRemoveItemButton() {
        await this.page.click(this.locatorCartShowRemoveItemButton);
    }

    async fillCartShowClearCartButton() {
        await this.page.click(this.locatorCartShowClearCartButton);
    }

    async fillCartShowPurchaseAllLink() {
        await this.page.click(this.locatorCartShowPurchaseAllLink);
    } 
    async fillPurchaseAllAddressMethodCurrentAddressInput() {
        await this.page.click(this.locatorPurchaseAllAddressMethodCurrentAddressInput);
    }    

    async fillPurchaseAllAddressMethodTipcoAddressInput() {
        await this.page.click(this.locatorPurchaseAllAddressMethodTipcoAddressInput);
    }

    async fillPurchaseAllPaymentMethodCashOnDeliveryInput() {
        await this.page.click(this.locatorPurchaseAllPaymentMethodCashOnDeliveryInput);
    }

    async fillPurchaseAllPaymentMethodPromptpayInput() {
        await this.page.click(this.locatorPurchaseAllPaymentMethodPromptpayInput);
    }

    async fillPurchaseAllConfirmButton() {
        await this.page.click(this.locatorPurchaseAllConfirmButton);
    }
}