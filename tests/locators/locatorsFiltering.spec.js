import {expect, test} from "@playwright/test"

test.describe("Locators", () => {

    test("hasText", async ({page})=> { // все операции в браузере асинхронные
        await page.goto("/")

        const buttons = page.locator('.header-link', {
            hasText: 'Guest log in'})

       //page.getByPlaceholder("Name@example.com")
    })

    test("hasNotText", async ({page})=> {
        await page.goto("/")
        const buttons = page.locator('.header-link', {
            hasNotText: 'Guest log in'
        })

        for (const button of await buttons.all()) {
            console.log(await button.innerText())
        }
    })

    test("has", async ({page})=> {
        await page.goto("/")

        const aboutButton= page.locator('.header-link', {hasText: "About"})

        const navigationBlock = page.locator('.header_nav', {
            has: aboutButton
        })

        await expect(navigationBlock).toBeVisible()
    })

    test("filter", async ({page})=> {
        await page.goto("/")

        const buttons = page.locator('.header-link')

        for (const button of await buttons.all()) {
            console.log(await button.innerText())
        }

        const navbarButtons = buttons.filter ({
            hasNotText: 'Guest log in'
        })

        for (const button of await navbarButtons.all()) {
            console.log(await button.innerText())
        }





    })
})