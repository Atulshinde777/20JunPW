import { ROUTES } from "../utils/constants.js";
import { Basepage } from "./basepage.js";

export class LoginPage extends Basepage {

    constructor(page) {

        super(page)
        //this.page = page;

        this.UsernameInput = page.getByPlaceholder("Username");
        this.passwordInput = page.locator("#password");
        this.loginButton = page.getByRole('button', { name: "Login" });
    }

    async open() {
        await this.goto(ROUTES.LOGIN);
        await this.UsernameInput.waitFor({ state: 'visible' });
    }


    async logIn(username, password) {
        await this.fill(this.UsernameInput, username);
        await this.fill(this.passwordInput, password);
        await this.click(this.loginButton);
    }
}