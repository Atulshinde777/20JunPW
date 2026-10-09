import { ROUTE, ROUTES } from "../utils/constants.js";
import { Basepage } from "./basepage.js";

class Cartpage extends Basepage {

    constructor(page) {

        super(page);
        this.pageTitle = page.locator(".title");

    }

    async open() {

        await this.goto(ROUTES.CART);
        CHECKOUT_COMPLETE: '/checkout-complete.html'

    }

}