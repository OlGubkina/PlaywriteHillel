import {myTestFromFixtures, expect} from "../../src/fixtures/myFixtures.js"

myTestFromFixtures.describe('Garage', ()=> {
    myTestFromFixtures.beforeEach(async({garagePage})=> {
        await garagePage.navigate()
    })

    myTestFromFixtures('should be able to open G page: button visible', async({garagePage})=>{
        await expect(garagePage.addCarButton).toBeVisible()
    })

    myTestFromFixtures('should be able to open G page: button enabled', async({garagePage})=>{
        await expect(garagePage.addCarButton).toBeEnabled()
    })
})