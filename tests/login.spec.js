import {expect, test} from "@playwright/test";

test.describe('Login', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('/')
        const signInButton = page.locator('.header_signin')
        await signInButton.click()
    })

    test('empty mail', async({page})=>{
        const firstNameInput = page.locator('#signinEmail')
        await firstNameInput.focus()
        await firstNameInput.blur()

        const validationMessage = page.locator('#signinEmail + .invalid-feedback')
        await expect(validationMessage).toHaveText('Email required')
        await expect(firstNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })

    test('empty password', async({page})=>{
        const passwordInput = page.locator('#signinPassword')
        await passwordInput.focus()
        await passwordInput.blur()

        const validationMessage = page.locator('#signinPassword + .invalid-feedback')
        await expect(validationMessage).toHaveText('Password required')
        await expect(passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')
    })
})