import { expect, test } from "@playwright/test";
import { loginPage } from "../pages/login.page";

test("Log in (if you already have an account)", async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.fillUserPassword("jobjab@gmail.com", "job1234!");
    await login.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/users");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/users");
    expect(await page.getByText("เข้าสู่ระบบสำเร็จ")).toBeVisible();
});

test("Log in click on the users icon(if you already have an account)", async ({ page }) => {
    const login = new loginPage(page);
    await login.gotoHome();
    await page.getByRole('link', { name: '🧑' }).click();
    await login.fillUserPassword("jobjab@gmail.com", "job1234!");
    await login.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/users");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/users");
    expect(await page.getByText("เข้าสู่ระบบสำเร็จ")).toBeVisible();
    expect(await page.getByRole("heading", { name: "🧑 บัญชีผู้ใช้" })).toBeVisible();
});

test("Log in click on the beers icon(if you already have an account)", async ({ page }) => {
    const login = new loginPage(page);
    await login.gotoHome();
    await page.getByRole('link', { name: '🍺' }).click();
    await login.fillUserPassword("jobjab@gmail.com", "job1234!");
    await login.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    expect(await page.getByText("เข้าสู่ระบบสำเร็จ")).toBeVisible();
    expect(await page.getByRole("heading", { name: "🍺 เบียร์ ODDS" })).toBeVisible();
});

test("Log in click on the cart icon(if you already have an account)", async ({ page }) => {
    const login = new loginPage(page);
    await login.gotoHome();
    await page.getByRole('link', { name: '🛍️' }).click();
    await login.fillUserPassword("jobjab@gmail.com", "job1234!");
    await login.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/carts/current");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/carts/current");
    expect(await page.getByText("เข้าสู่ระบบสำเร็จ")).toBeVisible();
    expect(await page.getByRole("heading", { name: "🛍️ ตะกร้าสินค้า" })).toBeVisible();
});

test("Log in no account", async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.fillUserPassword("jobjab1234@gmail.com", "job1234!");
    await login.clickLoginButton();
    await page.waitForSelector("text=ไม่พบอีเมลนี้ในระบบ");

    expect(await page.getByText("ไม่พบอีเมลนี้ในระบบ")).toBeVisible();
});

test("Log in no password", async ({ page }) => {
    const login = new loginPage(page);
    await login.goto();
    await login.fillUserPassword("jobjab@gmail.com", "");
    await login.clickLoginButton();
    await page.waitForSelector("text=รหัสผ่านไม่ถูกต้อง");

    expect(await page.getByText("รหัสผ่านไม่ถูกต้อง")).toBeVisible();
});