import GaragePage from "../../src/pageObjects/welcomePage/garagePage/GaragePage.js";
import {expect, test} from "@playwright/test";
import {USER1_STORAGE_STATE_PATH} from "../../src/data/constants.js";


test.describe('Garage', ()=> {
    let garagePage

    test.beforeEach(async({browser})=> {
        const ctx = await browser.newContext({
            storageState: USER1_STORAGE_STATE_PATH
        })
        const page = await ctx.newPage()
        garagePage = new GaragePage(page)
        await garagePage.navigate()
    })

    test('should be able to open G page: button visible', async({page})=>{
        await expect(garagePage.addCarButton).toBeVisible()
    })

    test('should be able to open G page: button enabled', async({page})=>{
        await expect(garagePage.addCarButton).toBeEnabled()
    })
})