import { expect, test } from "@playwright/test";
import { logOutPage } from "../pages/log_out.page";

test("Log in to log out", async ({ page }) => {
    const logOut = new logOutPage(page);
    await logOut.goto();
    await page.getByRole('link', { name: '🧑' }).click();
    await logOut.fillUserPassword("jobjob@gmail.com", "job1234!");
    await logOut.clickLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/users");
    await logOut.clickSignOutModalButton();
    await logOut.clickConfirmSignOutButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/");

    expect(page.url()).toBe("https://odds-odds-shop.onrender.com/");
    await page.waitForSelector("text=ออกจากระบบ");
    expect(await page.getByText("ออกจากระบบ")).toBeVisible();
});
