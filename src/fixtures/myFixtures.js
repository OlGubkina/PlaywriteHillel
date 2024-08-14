import {test as base, expect as baseExpect, request as apiRequest} from "@playwright/test"
import GaragePage from "../pageObjects/welcomePage/garagePage/GaragePage.js";
import {USER1_STORAGE_STATE_PATH} from "../data/constants.js";

export const test = base.extend({
    context : async ({browser}, use) => {
        const ctx = await browser.newContext({
            // read from file
            storageState: USER1_STORAGE_STATE_PATH
        })
        await use(ctx)
        await ctx.close()
    },

    request: async ({}, use) => {
        const ctx = await apiRequest.newContext({
            // read from file
            storageState: USER1_STORAGE_STATE_PATH
        })

        await use(ctx)
        await ctx.dispose()
    },

    garagePage: [async({page}, use)=>{
        const gp = new GaragePage(page)
        use(gp) // то, что передаём в use будет доступно в тестах
        // after test
    }, {title: 'Creating Garage Page instance'}],  //{box:true - не отображать ф в отчётах}
})

export const expect = baseExpect