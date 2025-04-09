import { test, expect } from "@playwright/test";
import { accountPage } from "../pages/account.page";

test.skip("Add account", async ({ page }) => {
    const account = new accountPage(page);
    await account.goto();
    await account.fillUsername("jobjab2@gmail.com");
    await account.fillPassword("job1234!");
    await account.fillLoginButton();
    await account.fillAccountsPathButton();
    await account.fillAccountIndexAddDataButton();
    await account.fillAccountFormFirstNameInput("Kittithat");
    await account.fillAccountFormLastNameInput("Singkhorn");
    await account.fillAccountFormAddressInput("123 Main St");
    await account.fillAccountFormPhoneInput("0811223344");
    await account.fillAccountFormPromptPayInput("1234567890123");
    await account.fillAccountFormSubmitButton();
    await page.waitForSelector("text=อัปเดตข้อมูลสำเร็จ");

    expect(await page.getByText("อัปเดตข้อมูลสำเร็จ")).toBeVisible();
    expect(await page.getByText("Kittithat")).toBeVisible();
    expect(await page.getByText("Singkhorn")).toBeVisible();
    expect(await page.getByText("123 Main St")).toBeVisible();
    expect(await page.getByText("0811223344")).toBeVisible();
    expect(await page.getByText("1234567890123")).toBeVisible();
});
test("Edit account", async ({ page }) => {
    const account = new accountPage(page);
    await account.goto();
    await account.fillUsername("jobjab2@gmail.com");
    await account.fillPassword("job1234!");
    await account.fillLoginButton();
    await account.fillAccountsPathButton();
    await account.fillAccountIndexEditDataButton();
    await account.fillAccountFormFirstNameInput("Kittithat");
    await account.fillAccountFormLastNameInput("Singkhorn");
    await account.fillAccountFormAddressInput("123 Main St");
    await account.fillAccountFormPhoneInput("0811223344");
    await account.fillAccountFormPromptPayInput("0933492899");
    await account.fillAccountFormSubmitButton();
    await page.waitForSelector("text=อัปเดตข้อมูลสำเร็จ");

    expect(await page.getByText("อัปเดตข้อมูลสำเร็จ")).toBeVisible();
    expect(await page.getByText("Kittithat")).toBeVisible();
    expect(await page.getByText("Singkhorn")).toBeVisible();
    expect(await page.getByText("123 Main St")).toBeVisible();
    expect(await page.getByText("0811223344")).toBeVisible();
    expect(await page.getByText("0933492899")).toBeVisible();
});  

test("Edit account with invalid data", async ({ page }) => {
    const account = new accountPage(page);
    await account.goto();
    await account.fillUsername("jobjab2@gmail.com");
    await account.fillPassword("job1234!");
    await account.fillLoginButton();
    await account.fillAccountsPathButton();
    await account.fillAccountIndexEditDataButton();
    await account.fillAccountFormFirstNameInput("Kittithat");
    await account.fillAccountFormLastNameInput("Singkhorn");
    await account.fillAccountFormAddressInput("123 Main St");
    await account.fillAccountFormPhoneInput("08112233dd");
    await account.fillAccountFormPromptPayInput("09334928dd");
    await account.fillAccountFormSubmitButton();
    await page.waitForSelector("text=กรุณาตรวจสอบข้อมูลที่กรอก");
    await page.waitForSelector("text=Phone เบอร์โทรศัพท์ 10 หลัก");
    await page.waitForSelector("text=Prompt pay หมายเลขโทรศัพท์ 10 หลัก, หมายเลขบัตรประชาชน 13 หลัก");

    expect(await page.getByText("กรุณาตรวจสอบข้อมูลที่กรอก")).toBeVisible();
    expect(await page.getByText("Phone เบอร์โทรศัพท์ 10 หลัก")).toBeVisible();
    expect(await page.getByText("Prompt pay หมายเลขโทรศัพท์ 10 หลัก, หมายเลขบัตรประชาชน 13 หลัก")).toBeVisible();
});