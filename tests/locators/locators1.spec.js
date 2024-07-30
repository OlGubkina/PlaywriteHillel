import {expect, test} from "@playwright/test"

test.describe("Locators", () => {
    test("Locators CSS", async ({page})=> { // все операции в браузере асинхронные
        await page.goto("/")

        const guestLoginBtn = page.locator(".header-link.-guest")
        await guestLoginBtn.click()

        const myProfileIcon = page.locator("#userNavDropdown")
        await expect(myProfileIcon).toBeVisible
    })

    test("Locators XPATH", async ({page})=> {
        await page.goto("/")

        const guestLoginBtn = page.locator('//*[@class="header-link -guest"]')
        await guestLoginBtn.click()

        const myProfileIcon = page.locator('//*[@id="userNavDropdown"]')
        await expect(myProfileIcon).toBeVisible
    })
})