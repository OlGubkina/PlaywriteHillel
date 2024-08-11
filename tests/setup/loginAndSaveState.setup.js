import {expect, test as setup} from "@playwright/test";
import {USERS} from "../../src/data/users.js";
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";
import {USER1_STORAGE_STATE_PATH} from "../../src/data/constants.js";


setup(`Login and save state`, async ({page})=>{
    const welcomePage = new WelcomePage(page)
    await welcomePage.navigate()
    const signInPopup = await welcomePage.header.clickSignInButton()
    await signInPopup.emailInput.fill(USERS.USER1.email)
    await signInPopup.passwordInput.fill(USERS.USER1.password)
    await signInPopup.loginButton.click()

    await expect(page).toHaveURL(/garage/)

    await page.context().storageState({ // куки, сторжи -> JSON
        path: USER1_STORAGE_STATE_PATH
   })
})