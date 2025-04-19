import { test, expect } from "@playwright/test";
import { showProductsPage } from "../pages/show_products.page";

test("Show My Products", async ({ page }) => {
    const showProducts = new showProductsPage(page);
    await showProducts.goto();
    await page.getByRole('link', { name: 'VADER 001 129 บาท' }).click();
    await showProducts.fillUsername("jobjob@gmail.com");
    await showProducts.fillPassword("job1234!");
    await showProducts.fillLoginButton();

    await expect(page.getByRole('link', { name: 'กลับไปหน้าสินค้า', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'กลับไปหน้าสินค้าตัวเอง', exact: true })).toBeVisible();
});

test("Products sold out", async ({ page }) => {
    const showProducts = new showProductsPage(page);
    await showProducts.goto();
    await page.getByRole('link', { name: 'Darth Vader Darth Vader Darth' }).click();
    await showProducts.fillUsername("nungkaozesam@gmail.com");
    await showProducts.fillPassword("job1234!");
    await showProducts.fillLoginButton();

    await expect(page.getByRole('link', { name: 'กลับไปหน้าสินค้า', exact: true })).toBeVisible();    
});

test("Show Products", async ({ page }) => {
    const showProducts = new showProductsPage(page);
    await showProducts.goto();
    await page.getByRole('link', { name: 'One 2 Pro Mini 001 1,590 บาท' }).click();
    await showProducts.fillUsername("nungkaozesam@gmail.com");
    await showProducts.fillPassword("job1234!");
    await showProducts.fillLoginButton();

    await expect(page.getByRole('link', { name: 'เลือกสินค้าต่อ', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'ซื้อเลย', exact: true })).toBeVisible();
    await expect(page.getByTestId('button-product-add-to-cart-button')).toBeVisible();
});