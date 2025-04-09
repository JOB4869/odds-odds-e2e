import { test, expect } from "@playwright/test";
import { CartPage } from "../pages/cart.page";

test("Add product to cart", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    await page.getByRole("link", { name: "One 2 Pro Mini 1,590 บาท" }).click();
    await cart.fillUsername("jobjob@gmail.com");
    await cart.fillPassword("job1234!");
    await cart.fillLoginButton();
    await cart.fillAddToCartButton();
    await page.waitForSelector("text=เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าลงตะกร้าเรียบร้อยแล้ว")).toBeVisible();
});

test("Add product to cart and delete product from cart", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    await page.getByRole("link", { name: "One 2 Pro Mini 1,590 บาท" }).click();
    await cart.fillUsername("jobjob@gmail.com");
    await cart.fillPassword("job1234!");
    await cart.fillLoginButton();
    await cart.fillAddToCartButton();
    await page.getByRole("link", { name: "Obi-Wan 129 บาท" }).click();
    await cart.fillAddToCartButton();

    await page.getByRole('link', { name: '🛍️' }).click();
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await cart.fillCartShowRemoveItemButton();
    await page.waitForSelector("text=ลบสินค้าออกจากตะกร้าเรียบร้อยแล้ว");

    expect(await page.getByText("ลบสินค้าออกจากตะกร้าเรียบร้อยแล้ว")).toBeVisible();
});

test("Add product to cart and buy products from cart but no proof of payment", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    await page.getByRole("link", { name: "One 2 Pro Mini 1,590 บาท" }).click();
    await cart.fillUsername("jobjob@gmail.com");
    await cart.fillPassword("job1234!");
    await cart.fillLoginButton();
    await cart.fillAddToCartButton();
    await page.getByRole("link", { name: "Obi-Wan 129 บาท" }).click();
    await cart.fillAddToCartButton();

    await page.getByRole('link', { name: '🛍️' }).click();
    await cart.fillCartShowPurchaseAllLink();
    await cart.fillPurchaseAllAddressMethodCurrentAddressInput();
    let dialogMessage = "";
    page.once("dialog", async dialog => {
        dialogMessage = dialog.message();
        await dialog.dismiss();
    });
    await cart.fillPurchaseAllConfirmButton();
    expect(dialogMessage).toBe("กรุณาอัปโหลดหลักฐานการชำระเงิน");
});
test("Add product to cart and buy products from cart for current address", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    await page.getByRole("link", { name: "One 2 Pro Mini 1,590 บาท" }).click();
    await cart.fillUsername("jobjob@gmail.com");
    await cart.fillPassword("job1234!");
    await cart.fillLoginButton();
    await cart.fillAddToCartButton();
    await page.getByRole("link", { name: "Obi-Wan 129 บาท" }).click();
    await cart.fillAddToCartButton();

    await page.getByRole('link', { name: '🛍️' }).click();
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await cart.fillCartShowPurchaseAllLink();
    await cart.fillPurchaseAllAddressMethodCurrentAddressInput();
    await page.setInputFiles('input[type="file"]', "src/assets/testslip.jpg");
    await cart.fillPurchaseAllConfirmButton();
    await page.waitForSelector("text=สั่งซื้อสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("สั่งซื้อสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Add product to cart and buy products from cart for tipco address", async ({ page }) => {
    const cart = new CartPage(page);
    await cart.goto();
    await page.getByRole("link", { name: "DARTH VADER DARTH VADER DARTH" }).click();
    await cart.fillUsername("jobjob@gmail.com");
    await cart.fillPassword("job1234!");
    await cart.fillLoginButton();
    await cart.fillAddToCartButton();

    await page.getByRole('link', { name: '🛍️' }).click();
    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await cart.fillCartShowPurchaseAllLink();
    await cart.fillPurchaseAllAddressMethodTipcoAddressInput();
    await cart.fillPurchaseAllPaymentMethodCashOnDeliveryInput();

    await cart.fillPurchaseAllConfirmButton();
    await page.waitForSelector("text=สั่งซื้อสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("สั่งซื้อสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
