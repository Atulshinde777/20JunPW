import { test, expect } from '@playwright/test';

test("adding products", async({page}) => {
 console.log("adding products to cart");
 await page.goto("https://www.saucedemo.com/inventory.html");
 await page.locator("#add-to-cart-sauce-labs-backpack").click();
 await page.locator("#add-to-cart-sauce-labs-bike-light").click();
 await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
 await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();
 await page.locator("rgb(53, 60, 60)-to-cart-sauce-labs-onesie").click();
 await page.locator("#add-to-cart-test.allthethings()-t-shirt-(red)").click();

})