import { test, expect } from "@playwright/test";
import { editProductsPage } from "../pages/edit_products.page";

test("Edit Products but not change image", async ({ page }) => {
    const editProducts = new editProductsPage(page);
    await editProducts.goto();
    await editProducts.fillUsername("jobjob@gmail.com");
    await editProducts.fillPassword("job1234!");
    await editProducts.fillLoginButton();
    await editProducts.fillProductsPathButton();
    await editProducts.fillProductIndexEditProductLink();
    await editProducts.fillProductNameInput("DARTH VADER");
    await editProducts.fillProductDescriptionInput("DARTH VADER DARTH VADER DARTH VADER DARTH VADER");
    await editProducts.fillProductPriceInput("100");
    await editProducts.fillProductSubmitButton();
    await page.waitForSelector("text=อัปเดตสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("อัปเดตสินค้าเรียบร้อยแล้ว")).toBeVisible();
    expect(await page.getByText("DARTH VADER")).toBeVisible();
});
test("Edit Products change image", async ({ page }) => {
    const editProducts = new editProductsPage(page);
    await editProducts.goto();
    await editProducts.fillUsername("jobjob@gmail.com");
    await editProducts.fillPassword("job1234!");
    await editProducts.fillLoginButton();
    await editProducts.fillProductsPathButton();
    await editProducts.fillProductIndexEditProductLink();
    await editProducts.fillProductNameInput("DARTH VADER");
    await editProducts.fillProductDescriptionInput("DARTH VADER DARTH VADER DARTH VADER DARTH VADER");
    await page.setInputFiles('input[type="file"]', ["src/assets/p1.jpg", "src/assets/p2.jpg", "src/assets/p3.jpg"]);
    await editProducts.fillProductPriceInput("100");
    await editProducts.fillProductSubmitButton();
    await page.waitForSelector("text=อัปเดตสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("อัปเดตสินค้าเรียบร้อยแล้ว")).toBeVisible();
    expect(await page.getByText("DARTH VADER OB1")).toBeVisible();
});
test("Edit Products with invalid data", async ({ page }) => {
    const editProducts = new editProductsPage(page);
    await editProducts.goto();
    await editProducts.fillUsername("jobjob@gmail.com");
    await editProducts.fillPassword("job1234!");
    await editProducts.fillLoginButton();
    await editProducts.fillProductsPathButton();
    await editProducts.fillProductIndexEditProductLink();
    await editProducts.fillProductNameInput("DARTH VADER");
    await editProducts.fillProductDescriptionInput("DARTH VADER DARTH VADER DARTH VADER DARTH VADER");
    await page.setInputFiles('input[type="file"]', ["src/assets/p1.jpg", "src/assets/p2.jpg", "src/assets/p3.jpg"]);
    await editProducts.fillProductPriceInput("qwe");
    await editProducts.fillProductSubmitButton();
    await page.waitForSelector("text=Price ต้องมากกว่าหรือเท่ากับ 0");

    expect(await page.getByText("Price ต้องมากกว่าหรือเท่ากับ 0")).toBeVisible();
});