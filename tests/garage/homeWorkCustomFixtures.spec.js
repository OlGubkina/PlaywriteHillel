import {reWrittenTestFromFixture, reWrittenExpect} from "../../src/fixtures/userGaragePage.js"

reWrittenTestFromFixture.describe.only('Garage', ()=> {
    reWrittenTestFromFixture.beforeEach(async({garagePage})=> {
        await garagePage.navigate()
    })

    reWrittenTestFromFixture('Heading text should be = Garage', async({garagePage})=>{
        await reWrittenExpect(garagePage.garageHeading).toHaveText("Garage")
        //await garagePage.pause()
    })
})