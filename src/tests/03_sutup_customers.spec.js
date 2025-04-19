import { expect, test } from "@playwright/test";
import { signUpPage } from "../pages/sign_up.page";
import { accountPage } from "../pages/account.page";

test("Sign up customers", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto();
    await signUp.fillUserPassword("nungkaozesam@gmail.com", "job1234!", "job1234!");  
    await signUp.clickSignupButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/additional_info");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/additional_info");
    expect(await page.getByRole('heading', { name: '👤 สร้างบัญชีผู้ใช้ใหม่' })).toBeVisible();
    expect(await page.getByText('ขอบคุณสำหรับการลงทะเบียน')).toBeVisible();
});
test("Sign up customers2", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto();
    await signUp.fillUserPassword("jobjab@gmail.com", "job1234!", "job1234!");  
    await signUp.clickSignupButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/additional_info");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/additional_info");
    expect(await page.getByRole('heading', { name: '👤 สร้างบัญชีผู้ใช้ใหม่' })).toBeVisible();
    expect(await page.getByText('ขอบคุณสำหรับการลงทะเบียน')).toBeVisible();
});