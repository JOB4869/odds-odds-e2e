import { test, expect } from "@playwright/test";
import { resetPasswordPage } from "../pages/reset_password.page";

test("reset password", async ({ page }) => {
    const resetPassword = new resetPasswordPage(page);
    await resetPassword.goto();
    await resetPassword.clickForgotPasswordLink();
    await resetPassword.fillEmailInputResetPassword("nungkaozesam@gmail.com");
    await resetPassword.clickSubmitButtonResetPassword();

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/password/reset");
    const message = page.locator("text=ส่งลิงก์รีเซ็ตรหัสผ่านไปยังอีเมลของคุณแล้ว");
    await expect(message).toBeVisible();
});