import { Page } from "@playwright/test";

export class resetPasswordPage {

    baseUrl = "https://odds-odds-shop.onrender.com/sign_in";

    locatorForgotPasswordLink = "[data-testid='forgot-password-link']";

    locatorEmailInputResetPassword = "[data-testid='email-input-reset-password']";
    locatorSubmitButtonResetPassword = "[data-testid='submit-button-reset-password']";

    constructor(page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(this.baseUrl);
    }

    async clickForgotPasswordLink() {
        await this.page.click(this.locatorForgotPasswordLink);
    }

    async fillEmailInputResetPassword(email) {
        await this.page.fill(this.locatorEmailInputResetPassword, email);
    }

    async clickSubmitButtonResetPassword() {
        await this.page.click(this.locatorSubmitButtonResetPassword);
    }
}