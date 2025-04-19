import { test, expect } from "@playwright/test";
import { deleteProductsPage } from "../pages/delete_products.page";

test("Delete Products", async ({ page }) => {
    const deleteProducts = new deleteProductsPage(page);
    await deleteProducts.goto();
    await deleteProducts.fillUsername("jobjob@gmail.com");
    await deleteProducts.fillPassword("job1234!");
    await deleteProducts.fillLoginButton();
    await deleteProducts.fillProductsPathButton();

    page.once('dialog', async dialog => {
        await dialog.accept();
    });
    await page.getByTestId("product-index-delete-product-button").first().click();
    
    await page.waitForSelector("text=ลบสินค้าเรียบร้อยแล้ว");

    expect(await page.getByText("ลบสินค้าเรียบร้อยแล้ว")).toBeVisible();
});