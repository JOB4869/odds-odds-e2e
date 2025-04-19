import { test, expect } from "@playwright/test";
import { showPasswordPage } from "../pages/show_password.page";

test("show password", async ({ page }) => {
    const showPassword = new showPasswordPage(page);
    await showPassword.goto();
    await showPassword.fillPassword("job1234!");
    await showPassword.fillShowPasswordInput("job1234!");

    expect(await showPassword.getPassword()).toBe("job1234!");
});

test("show password signup", async ({ page }) => {
    const showPassword = new showPasswordPage(page);
    await showPassword.gotoSignup();
    await showPassword.fillPasswordSignup("job1234!");
    await showPassword.fillShowPasswordSignupInput("job1234!");

    expect(await showPassword.getPasswordSignup()).toBe("job1234!");
});

test("show password change password", async ({ page }) => {
    const showPassword = new showPasswordPage(page);
    await showPassword.gotoChangePassword();
    await showPassword.fillUsername("jobjob@gmail.com");
    await showPassword.fillPassword("job1234!");
    await showPassword.fillLoginButton();
    await page.waitForURL("https://odds-odds-shop.onrender.com/password");
    await showPassword.fillPasswordChangePassword("job1234!");
    await showPassword.fillPasswordChangePasswordConfirmation("job1234!");
    await showPassword.fillShowPasswordChangePasswordInput("job1234!");


    expect(await showPassword.getPasswordChangePassword()).toBe("job1234!");
});
