import SigninPopup from "../welcomePage/components/SigninPopup.js";
import BaseComponent from "./BaseComponent.js";

export default class Header extends BaseComponent{
    constructor(page) {
        super(page)
        this.signinButton = page.locator('.header_signin')
    }

    async clickSignInButton() {
        await this.signinButton.click()
        return new SigninPopup(this._page)
    }
}