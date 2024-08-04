import BasePage from "../BasePage.js";
import SignupPopup from "./components/SignupPopup.js";

export default class WelcomePage extends BasePage{
    constructor(page) {
        super(page, '/', page.locator(".header-link.-guest"))
        this.signupButton = page.locator('.btn-primary')
    }

    async clickSignupButton() {
        await this.signupButton.click()
        return new SignupPopup(this._page)
    }
}