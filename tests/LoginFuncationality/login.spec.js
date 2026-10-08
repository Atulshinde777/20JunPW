 // import { test, expect } from "@playwright/test";

import { test, expect } from '../../fixture/baseFixture.js';

test("login funcationality", async ({ loginPage }) => {

    await loginPage.open();

    await loginPage.logIn("standard_user", "secret_sauce");

    await expect(loginPage.page.locator(".title")).toHaveText("Products");

})