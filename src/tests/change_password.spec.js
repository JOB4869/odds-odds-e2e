import { expect, test } from "@playwright/test";
import { changePasswordPage } from "../pages/change_password.page";

test("change password", async ({ page }) => {
    const changePassword = new changePasswordPage(page);
    await changePassword.goto();
    await page.getByRole('link', { name: '🧑' }).click();
    await changePassword.fillUserPassword("jobjab@gmail.com", "job1234!");
    await changePassword.clickLoginButton();
    await changePassword.clickEditPasswordPathButton();
    await changePassword.fillChangePasswordInput("job1234!");
    await changePassword.fillChangePasswordConfirmationInput("job1234!");
    await changePassword.clickChangePasswordSubmitButton();

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/password");
    const message = page.locator("text=เปลี่ยนรหัสผ่านสำเร็จ");
    await expect(message).toBeVisible();
});

test("change password not valid", async ({ page }) => {
    const changePassword = new changePasswordPage(page);
    await changePassword.goto();
    await page.getByRole('link', { name: '🧑' }).click();
    await changePassword.fillUserPassword("jobjab@gmail.com", "job1234!");
    await changePassword.clickLoginButton();
    await changePassword.clickEditPasswordPathButton();
    await changePassword.fillChangePasswordInput("job123");
    await changePassword.fillChangePasswordConfirmationInput("job123");
    await changePassword.clickChangePasswordSubmitButton();

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/password");
    const message = page.locator("text=Password รหัสผ่านต้องมีความยาวระหว่าง 8-16 ตัวอักษร และประกอบด้วยตัวอักษร ตัวเลข และสัญลักษณ์พิเศษ");
    await expect(message).toBeVisible();
}); 
test("change password not match", async ({ page }) => {
    const changePassword = new changePasswordPage(page);
    await changePassword.goto();
    await page.getByRole('link', { name: '🧑' }).click();
    await changePassword.fillUserPassword("jobjab@gmail.com", "job1234!");
    await changePassword.clickLoginButton();
    await changePassword.clickEditPasswordPathButton();
    await changePassword.fillChangePasswordInput("job1234!");
    await changePassword.fillChangePasswordConfirmationInput("job12345!");
    await changePassword.clickChangePasswordSubmitButton();

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/password");
    const message = page.locator("text=Password confirmation doesn't match Password");
    await expect(message).toBeVisible();
}); 