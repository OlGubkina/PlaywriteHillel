import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";
import {expect, test} from "@playwright/test";
import GaragePage from "../../src/pageObjects/welcomePage/garagePage/GaragePage.js";
import {USERS} from "../../src/data/users.js";


test.describe('Garage', ()=> {
    let welcomePage
    let garagePage

    test.beforeEach(async({page})=> {
        welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        const signInPopup = await welcomePage.header.clickSignInButton()
        await signInPopup.emailInput.fill(USERS.USER1.email)
        await signInPopup.passwordInput.fill(USERS.USER1.password)
        await signInPopup.loginButton.click()

        await expect(page).toHaveURL(/garage/)
        garagePage = new GaragePage(page)
    })

    test('should be able to open G page', async({page})=>{
        await expect(garagePage.addCarButton).toBeVisible()
    })
})