import {expect, test} from "@playwright/test"

test.describe("Assertions", () => {
    test("sync assertions", async ({page}) => {
        const expectedResult = 4

        expect(2 + 2).toBe(expectedResult) // для примитивов

        expect({a: 1}, "Custom error").toEqual({a: 1}) // для более сложных типов

        expect([{a: 1}], "Custom error").toEqual([{a: 1}]) // array

        expect({name: "Peter", age: 55}, "Custom error").toMatchObject({
            name: "Peter"
        })
    })

    test("async(web1) assertions", async ({page}) => {
        await page.goto("/")

        const signUpBtn = page.locator(".hero-descriptor_btn")
        await expect(signUpBtn, "Button should be visible").toBeVisible({
            timeout: 10_000
        })
        await signUpBtn.click()

        const form = page.locator('app-signup-modal form')
        const nameInput = form.locator('#signupName')

        await nameInput.fill(userName)
        await expect(nameInput).toHaveValue(userName)

        await nameInput.fill("Peter")
        await expect(nameInput).toHaveValue("Peter")
        await page.pause()
    })

    test("Screens", async ({page}) => { // все операции в браузере асинхронные
        await page.goto("/")

        const signUpBtn = page.locator(".hero-descriptor_btn")
        await signUpBtn.click()

        const form = page.locator('app-signup-modal form')
        const nameInput = form.locator('#signupName')

        await nameInput.focus()
        await nameInput.blur()

        await expect(form).toHaveScreenshot("name-validation.png", {
            maxDiffPixelRatio: 0.018
        }) // первый проход теста - упадёт, создаст вкриншот
    })
})