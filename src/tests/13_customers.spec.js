import { test, expect } from "@playwright/test";
import { customersPage } from "../pages/customers.page";

test("Customers", async ({ page }) => {
    const customers = new customersPage(page);
    await customers.goto();
    await customers.fillUsername("jobjob@gmail.com");
    await customers.fillPassword("job1234!");
    await customers.fillLoginButton();
    await customers.fillProductsPathButton();
    await customers.fillProductIndexCustomersProductLink();

    await expect(page.getByRole('heading', { name: 'ผู้ซื้อ :' })).toBeVisible();
});

test("No customers", async ({ page }) => {
    const customers = new customersPage(page);
    await customers.goto();
    await customers.fillUsername("nungkaozesam@gmail.com");
    await customers.fillPassword("job1234!");
    await customers.fillLoginButton();
    await customers.fillProductsPathButton();
    await customers.fillProductIndexCustomersProductLink();

    await expect(page.getByText('ยังไม่มีผู้ซื้อสินค้านี้')).toBeVisible();
});