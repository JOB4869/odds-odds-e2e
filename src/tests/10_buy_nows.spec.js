import { test, expect } from "@playwright/test";
import { buyNowsPage } from "../pages/buy_nows.page";


test("Buy Now with current address", async ({ page }) => {
    const buyNows = new buyNowsPage(page);
    await buyNows.goto();
    await page.getByRole("link", { name: "Obi-Wan Kenobi Obi-Wan Kenobi" }).click();
    await buyNows.fillUsername("nungkaozesam@gmail.com");
    await buyNows.fillPassword("job1234!");
    await buyNows.fillLoginButton();
    await page.getByRole("link", { name: "ซื้อเลย" }).click();
    await buyNows.fillPurchaseAddressMethodCurrentAddressInput();
    await page.setInputFiles('input[type="file"]', "src/assets/testslip.jpg");
    await buyNows.fillPurchaseConfirmButton();
    await page.waitForSelector("text=สั่งซื้อสินค้าสำเร็จ! 🎉");

    expect(await page.getByText("สั่งซื้อสินค้าสำเร็จ! 🎉")).toBeVisible();
});

test("Buy Now with tipco address and cash on delivery", async ({ page }) => {
    const buyNows = new buyNowsPage(page);
    await buyNows.goto();
    await page.getByRole("link", { name: "Darth Vader Darth Vader Darth" }).click();
    await buyNows.fillUsername("nungkaozesam@gmail.com");
    await buyNows.fillPassword("job1234!");
    await buyNows.fillLoginButton();
    await page.getByRole("link", { name: "ซื้อเลย" }).click();
    await buyNows.fillPurchaseAddressMethodTipcoAddressInput();
    await buyNows.fillPurchasePaymentMethodCashOnDeliveryInput();
    await buyNows.fillPurchaseConfirmButton();
    await page.waitForSelector("text=สั่งซื้อสินค้าสำเร็จ! 🎉");

    expect(await page.getByText("สั่งซื้อสินค้าสำเร็จ! 🎉")).toBeVisible();
});
test("Buy Now with current address and no proof of payment", async ({ page }) => {
    const buyNows = new buyNowsPage(page);
    await buyNows.goto();
    await page.getByRole("link", { name: "Ducky keyboard one 2 mini 1" }).click();
    await buyNows.fillUsername("nungkaozesam@gmail.com");
    await buyNows.fillPassword("job1234!");
    await buyNows.fillLoginButton();
    await page.getByRole("link", { name: "ซื้อเลย" }).click();
    await buyNows.fillPurchaseAddressMethodCurrentAddressInput();

    let dialogMessage = "";
    page.once("dialog", async dialog => {
        dialogMessage = dialog.message();
        await dialog.dismiss();
    });
    await buyNows.fillPurchaseConfirmButton();
    expect(dialogMessage).toBe("กรุณาอัปโหลดหลักฐานการชำระเงิน");
});

test("Buy Now with tipco address and promptpay and no proof of payment", async ({ page }) => {
    const buyNows = new buyNowsPage(page);
    await buyNows.goto();
    await page.getByRole("link", { name: "Ducky keyboard" }).click();
    await buyNows.fillUsername("nungkaozesam@gmail.com");
    await buyNows.fillPassword("job1234!");
    await buyNows.fillLoginButton();
    await page.getByRole("link", { name: "ซื้อเลย" }).click();
    await buyNows.fillPurchaseAddressMethodTipcoAddressInput();
    await buyNows.fillPurchasePaymentMethodPromptpayInput();
    let dialogMessage = "";
    page.once("dialog", async dialog => {
        dialogMessage = dialog.message();
        await dialog.dismiss();
    });
    await buyNows.fillPurchaseConfirmButton();
    expect(dialogMessage).toBe("กรุณาอัปโหลดหลักฐานการชำระเงิน");
});

