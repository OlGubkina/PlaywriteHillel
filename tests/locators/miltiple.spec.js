import {expect, test} from "@playwright/test";

 test.describe("Locators", () => {

    test("Multiple for i", async ({page}) => { // все операции в браузере асинхронные
        await page.goto("/")

        const buttons = page.locator('.header-link')

        const buttonsCount = await buttons.count()

        for (let i = 0; i < buttonsCount; i++) {
            const button = buttons.nth(i)
            await expect(button).toBeVisible()
        }
    })

    test("Multiple for of", async ({page}) => { // все операции в браузере асинхронные
        await page.goto("/")

        const buttons = page.locator('.header-link')

        for (const button of await buttons.all() ) {
            await expect(button).toBeVisible()
        }
    })
})
