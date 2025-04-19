import { expect, test } from "@playwright/test";
import { beersPage } from "../pages/beers.page";

test("Beers page", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole('link', { name: '🍺' }).click();
    await beers.fillUserPassword("jobjob@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
});

test("Beers page buy beer set1", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole("link", { name: "🍺" }).click();
    await beers.fillUserPassword("jobjob@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");
    await page.getByRole("link", { name: "แก้ว 3 แก้ว 100 บาท" }).click();
    await page.setInputFiles('input[type="file"]', "src/assets/testslip.jpg");
    await beers.clickBuyNowButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    expect(await page.getByText("อัปโหลดสลิปเรียบร้อย")).toBeVisible();
});
test("Beers page buy beer set2", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole("link", { name: "🍺" }).click();
    await beers.fillUserPassword("jobjob@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");
    await page.getByRole("link", { name: "แก้ว 6 แก้ว 200 บาท" }).click();
    await page.setInputFiles('input[type="file"]', "src/assets/testslip.jpg");
    await beers.clickBuyNowButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    expect(await page.getByText("อัปโหลดสลิปเรียบร้อย")).toBeVisible();
});
test("Beers page buy beer set3", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole("link", { name: "🍺" }).click();
    await beers.fillUserPassword("jobjob@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");
    await page.getByRole("link", { name: "แก้ว 9 แก้ว 300 บาท" }).click();
    await page.setInputFiles('input[type="file"]', "src/assets/testslip.jpg");
    await beers.clickBuyNowButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    expect(await page.getByText("อัปโหลดสลิปเรียบร้อย")).toBeVisible();
});
test("Beers page buy beer set4", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole("link", { name: "🍺" }).click();
    await beers.fillUserPassword("jobjob@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");
    await page.getByRole("link", { name: "แก้ว 12 แก้ว 400 บาท" }).click();
    await page.setInputFiles('input[type="file"]', "src/assets/testslip.jpg");
    await beers.clickBuyNowButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    expect(await page.getByText("อัปโหลดสลิปเรียบร้อย")).toBeVisible();
});
test("check out beer", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole("link", { name: "🍺" }).click();
    await beers.fillUserPassword("jobjob@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");
    await beers.clickProductBeerCheckOutButton();
    await beers.clickCheckOutBeerConfirmButton();

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    const message = page.locator("text=/ดื่มเบียร์สำเร็จ! เครดิตคงเหลือ \\d+ แก้ว/");
    await expect(message).toBeVisible();
});
test("check out beer not enough credit", async ({ page }) => {
    const beers = new beersPage(page);
    await beers.goto();
    await page.getByRole("link", { name: "🍺" }).click();
    await beers.fillUserPassword("jobjab@gmail.com", "job1234!");
    await beers.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/beers");
    await beers.clickProductBeerCheckOutButton();
    await beers.clickCheckOutBeerConfirmButton();

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/beers");
    const message = page.locator("text=คุณไม่มีเครติดเบียร์คงเหลือ");
    await expect(message).toBeVisible();
});