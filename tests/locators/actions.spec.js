import {expect, test} from "@playwright/test"

test.describe("Actions", () => {
    test("Actions > Input > fill", async ({page}) => { // все операции в браузере асинхронные
        await page.goto("/")

        const userName = 'Olga'

        const signUpBtn = page.locator(".hero-descriptor_btn")
        await signUpBtn.click()

        const form = page.locator('app-signup-modal form')
        const nameInput = form.locator('#signupName')

        await nameInput.fill(userName)
        //await page.pause()
    })

    test("Actions > Input > pressSequentially", async ({page}) => { // все операции в браузере асинхронные
        await page.goto("/")

        const userName = 'Olga'

        const signUpBtn = page.locator(".hero-descriptor_btn")
        await signUpBtn.click()

        const form = page.locator('app-signup-modal form')
        const nameInput = form.locator('#signupName')

        await nameInput.pressSequentially(userName, {delay: 120})
        await nameInput.clear() //если вызвать метод 2 раза - текст допишется до первого вызова
        await nameInput.pressSequentially(userName, {delay: 120})
        await page.pause()
    })


})