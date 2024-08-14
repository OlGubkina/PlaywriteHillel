import {expect, test} from "../../../src/fixtures/myFixtures.js";

test.describe("Cars", ()=>{
    test.afterEach(async({request})=>{
        const carsList = await request.get('/api/cars')
        const {data: cars} = await carsList.json()

        // await Promise.all(cars.map((car)=>(async ()=>{
        //         const res = await request.delete(`/api/cars/${car.id}`)
        //         await expect(res).toBeOK()
        //     })())
        // )

        for (const car of cars) {
            const res = await request.delete(`/api/cars/${car.id}`)
            await expect(res).toBeOK()
        }
    })

    test.only ("Create car", async({request})=>{
        const requestBody = {
            "carBrandId": 1,
            "carModelId": 1,
            "mileage": 122
        }
        const response = await request.post('/api/cars', {
            data: requestBody
        })
        const body = await response.json()
        expect(body.data, "Car should be created").toMatchObject(requestBody)
    })
})
