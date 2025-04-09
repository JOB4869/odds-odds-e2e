import { Page } from "@playwright/test";

export class accountPage {
    baseUrl = "https://odds-odds-shop.onrender.com/users";

    locatorUsername = "[data-testid='email-login-input']";
    locatorPassword = "[data-testid='password-login-input']";
    locatorLoginButton = "[data-testid='login-button']";

    locatorAccountsPathButton = "[data-testid='accounts-path-button']";

    locatorAccountIndexAddDataButton = "[data-testid='account-index-add-data-button']";
    locatorAccountIndexEditDataButton = "[data-testid='account-index-edit-data-button']";

    locatorAccountFormFirstNameInput = "[data-testid='account-form-first-name-input']";
    locatorAccountFormLastNameInput = "[data-testid='account-form-last-name-input']";
    locatorAccountFormAddressInput = "[data-testid='account-form-address-input']";
    locatorAccountFormPhoneInput = "[data-testid='account-form-phone-input']";
    locatorAccountFormPromptPayInput = "[data-testid='account-form-prompt-pay-input']";
    locatorAccountFormSubmitButton = "[data-testid='account-form-submit-button']";

    locatorAccountIndexFirstNameText = "[data-testid='account-index-first-name-text']";
    locatorAccountIndexLastNameText = "[data-testid='account-index-last-name-text']";
    locatorAccountIndexAddressText = "[data-testid='account-index-address-text']";
    locatorAccountIndexPhoneText = "[data-testid='account-index-phone-text']";
    locatorAccountIndexPromptPayText = "[data-testid='account-index-prompt-pay-text']";

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

    async fillAccountsPathButton() {
        await this.page.click(this.locatorAccountsPathButton);
    }

    async fillAccountIndexAddDataButton() {
        await this.page.click(this.locatorAccountIndexAddDataButton);
    }

    async fillAccountIndexEditDataButton() {
        await this.page.click(this.locatorAccountIndexEditDataButton);
    }

    async fillAccountFormFirstNameInput(firstName) {
        await this.page.fill(this.locatorAccountFormFirstNameInput, firstName);
    }

    async fillAccountFormLastNameInput(lastName) {
        await this.page.fill(this.locatorAccountFormLastNameInput, lastName);
    }
    
    async fillAccountFormAddressInput(address) {
        await this.page.fill(this.locatorAccountFormAddressInput, address);
    }

    async fillAccountFormPhoneInput(phone) {
        await this.page.fill(this.locatorAccountFormPhoneInput, phone);
    }

    async fillAccountFormPromptPayInput(promptPay) {
        await this.page.fill(this.locatorAccountFormPromptPayInput, promptPay);
    }

    async fillAccountFormSubmitButton() {
        await this.page.click(this.locatorAccountFormSubmitButton);
    }

    async getAccountIndexFirstNameText() {
        return await this.page.text(this.locatorAccountIndexFirstNameText);
    }

    async getAccountIndexLastNameText() {
        return await this.page.textContent(this.locatorAccountIndexLastNameText);
    }

    async getAccountIndexAddressText() {    
        return await this.page.textContent(this.locatorAccountIndexAddressText);
    }

    async getAccountIndexPhoneText() {
        return await this.page.textContent(this.locatorAccountIndexPhoneText);
    }

    async getAccountIndexPromptPayText() {
        return await this.page.textContent(this.locatorAccountIndexPromptPayText);
    }
    
    
}