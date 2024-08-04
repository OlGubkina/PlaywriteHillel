import {expect} from "@playwright/test";
import Header from "./component/Header.js";

export default class BasePage {
    constructor(page, url, waitPageLocator) {
        this._page = page
        this._url = url
        this._waitPageLocator = waitPageLocator
        this.header = new Header(page)
    }

    async navigate() {
        await this._page.goto(this._url)
        await expect(this._waitPageLocator).toBeVisible()
    }
}

