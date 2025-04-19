import { test, expect } from "@playwright/test";
import { addProductsPage } from "../pages/add_products.page";

test("Products1", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("Obi-Wan Kenobi Obi-Wan Kenobi");
    await addProducts.fillProductDescriptionInput("DARTH VADER DARTH VADER DARTH VADER DARTH VADER");
    await page.setInputFiles('input[type="file"]', ["src/assets/p1.jpg", "src/assets/p2.jpg", "src/assets/p3.jpg"]);
    await addProducts.fillProductPriceInput("100");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Products2", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("Darth Vader Darth Vader Darth");
    await addProducts.fillProductDescriptionInput("DARTH VADER DARTH VADER DARTH VADER DARTH VADER");
    await page.setInputFiles('input[type="file"]', ["src/assets/p4.jpg", "src/assets/p5.jpg", "src/assets/p6.jpg"]);
    await addProducts.fillProductPriceInput("100");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Products3", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("Ducky keyboard one 2 mini 1");
    await addProducts.fillProductDescriptionInput("Ducky keyboard one 2 mini 1");
    await page.setInputFiles('input[type="file"]', ["src/assets/d1.jpg", "src/assets/d2.jpg", "src/assets/d3.jpg"]);
    await addProducts.fillProductPriceInput("100");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Products4", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("Ducky keyboard");
    await addProducts.fillProductDescriptionInput("Ducky keyboard one 2 mini 2");
    await addProducts.fillProductPriceInput("100");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Products5", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("One 2 Pro Mini 001");
    await addProducts.fillProductDescriptionInput("Ducky keyboard one 2 mini 2");
    await page.setInputFiles('input[type="file"]', ["src/assets/p1.jpg", "src/assets/p2.jpg", "src/assets/p3.jpg"]);
    await addProducts.fillProductPriceInput("1590");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Products6", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("jobjob@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("Obi-Wan 001");
    await addProducts.fillProductDescriptionInput("Obi-Wan");
    await page.setInputFiles('input[type="file"]', ["src/assets/d1.jpg", "src/assets/d2.jpg", "src/assets/d3.jpg"]);
    await addProducts.fillProductPriceInput("129");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});
test("Products8", async ({ page }) => {
    const addProducts = new addProductsPage(page);
    await addProducts.goto();
    await addProducts.fillUsername("nungkaozesam@gmail.com");
    await addProducts.fillPassword("job1234!");
    await addProducts.fillLoginButton();
    await addProducts.fillProductsPathButton();
    await addProducts.fillProductIndexAddProductLink();
    await addProducts.fillProductNameInput("VADER 007");
    await addProducts.fillProductDescriptionInput("VADER");
    await page.setInputFiles('input[type="file"]', ["src/assets/p1.jpg", "src/assets/p2.jpg", "src/assets/p3.jpg"]);
    await addProducts.fillProductPriceInput("129");
    await addProducts.fillProductSubmitButton();
    await page.waitForSelector("text=เพิ่มสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("เพิ่มสินค้าเรียบร้อยแล้ว")).toBeVisible();
});