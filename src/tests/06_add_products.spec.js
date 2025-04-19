import { test, expect } from "@playwright/test";
import { addProductsPage } from "../pages/add_products.page";

test("Add Products", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("DARTH VADER");
    await addProducts.fillProductDescriptionInput("DARTH VADER DARTH VADER DARTH VADER DARTH VADER");
    await page.setInputFiles('input[type="file"]', ["src/assets/p1.jpg", "src/assets/p2.jpg", "src/assets/p3.jpg"]);
    await addProducts.fillProductPriceInput("100");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
    expect(await page.getByText("DARTH VADER")).toBeVisible();
});
test("Add Products with invalid data", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("");
    await addProducts.fillProductDescriptionInput("");
    await addProducts.fillProductPriceInput("");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=Name กรุณากรอกชื่อสินค้า");
    await page.waitForSelector("text=Price กรุณากรอกราคา");
    await page.waitForSelector("text=Price ต้องมากกว่าหรือเท่ากับ 0");


    expect(await page.getByText("Name กรุณากรอกชื่อสินค้า")).toBeVisible();
    expect(await page.getByText("Price กรุณากรอกราคา")).toBeVisible();
    expect(await page.getByText("Price ต้องมากกว่าหรือเท่ากับ 0")).toBeVisible();
});