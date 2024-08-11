import {expect, test} from "@playwright/test";
import WelcomePage from "../src/pageObjects/welcomePage/WelcomePage.js";

test.describe('Login POM', () => {
    let signInPopup

    test.beforeEach(async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        signInPopup = await welcomePage.header.clickSignInButton()
    })

    test('POM: Empty email', async({page})=>{
        await signInPopup.emailInput.focus()
        await signInPopup.emailInput.blur()

        await expect(signInPopup.emailValidationMessage).toHaveText('Email required')
        await expect(signInPopup.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

    test('POM: Wrong email', async({page})=>{
        await signInPopup.fill({
            email: 'wrong',
            password: ''
        })
        await signInPopup.emailInput.blur()

        await expect(signInPopup.emailValidationMessage).toHaveText('Email is incorrect')
        await expect(signInPopup.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })


    test('empty password', async({page})=> {
        await signInPopup.passwordInput.focus()
        await signInPopup.passwordInput.blur()

        await expect(signInPopup.passwordValidationMessge).toHaveText('Password required')
        await expect(signInPopup.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })
})