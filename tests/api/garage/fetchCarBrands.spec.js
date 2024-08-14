import {expect, test} from "@playwright/test";


test ("fetch car brands", async({request})=>{
    const expected = {
        "status": "ok",
        "data": [
        {
            "id": 1,
            "title": "Audi",
            "logoFilename": "audi.png"
        },
        {
            "id": 2,
            "title": "BMW",
            "logoFilename": "bmw.png"
        },
        {
            "id": 3,
            "title": "Ford",
            "logoFilename": "ford.png"
        },
        {
            "id": 4,
            "title": "Porsche",
            "logoFilename": "porsche.png"
        },
        {
            "id": 5,
            "title": "Fiat",
            "logoFilename": "fiat.png"
        }]
    }

    const response = await request.get('/api/cars/brands')
    const body = await response.json()

    expect(body, "Response body should contain car brands").toEqual(expected)

})