import { expect, test } from "@playwright/test";
import { orderPage } from "../pages/order.page";

test("No order", async ({ page }) => {
    const order = new orderPage(page);
    await order.goto();
    await order.fillUsername("jobjab1@gmail.com");
    await order.fillPassword("job1234!");
    await order.fillLoginButton();
    await order.fillBuyNowsPathButton();
    
    const title = await order.getBuyNowIndexTitle();
    expect(await page.getByText('ยังไม่มีรายการสินค้าที่ซื้อ')).toBeVisible(); 
});
test("Order", async ({ page }) => {
    const order = new orderPage(page);
    await order.goto();
    await order.fillUsername("jobjab@gmail.com");
    await order.fillPassword("job1234!");
    await order.fillLoginButton();
    await order.fillBuyNowsPathButton();

    const title = await order.getBuyNowIndexTitle();
    const productName = await order.getBuyNowIndexProductName();
});