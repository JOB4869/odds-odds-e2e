import { expect, test } from "@playwright/test";
import { signUpPage } from "../pages/sign_up.page";

test("Sign up", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto();
    await signUp.fillUserPassword("jobjob@gmail.com", "job1234!", "job1234!");  
    await signUp.clickSignupButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/additional_info");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/additional_info");
    expect(await page.getByRole('heading', { name: '👤 สร้างบัญชีผู้ใช้ใหม่' })).toBeVisible();
    expect(await page.getByText('ขอบคุณสำหรับการลงทะเบียน')).toBeVisible();
});

test("Sign up with invalid email", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto();
    await signUp.fillUserPassword("jobjab", "job1234!", "job1234!");
    await signUp.clickSignupButton();
    const errorMessage = await page.getByText('Email รูปแบบอีเมลไม่ถูกต้อง');

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/sign_up");

});

test("Sign up with invalid password", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto();
    await signUp.fillUserPassword("jobjob@gmail.com", "job1234", "job1234");
    await signUp.clickSignupButton();
    const errorMessage = await page.getByText('Password รหัสผ่านต้องมีความยาวระหว่าง 8-16 ตัวอักษร');

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/sign_up");
});

test("Sign up with invalid confirm password", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto();
    await signUp.fillUserPassword("jobjob@gmail.com", "job1234!", "job1234");
    await signUp.clickSignupButton();
    const errorMessage = await page.getByText("Password รหัสผ่านต้องมีความยาวระหว่าง 8-16 Password confirmation doesn't match Password");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/sign_up");
});

test("Sign up success to users page", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto2();
    await page.getByTestId('back-to-user-path-button').click();
    await page.waitForURL("https://odds-odds-shop.onrender.com/users");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/users");
});
test("Sign up success to home page", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto2();
    await page.getByTestId('back-to-root-path-button').click();
    await page.waitForURL("https://odds-odds-shop.onrender.com/");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/");
});
test("Sign up success to beers odds page", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto2();
    await page.getByTestId('back-to-beers-path-button').click();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
});
test("Sign up success to accounts page", async ({ page }) => {
    const signUp = new signUpPage(page);
    await signUp.goto2();
    await page.getByTestId('back-to-accounts-path-button').click();
    await page.waitForURL("https://odds-odds-shop.onrender.com/accounts");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/accounts");
});