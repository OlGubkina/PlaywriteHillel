import {expect, test} from "@playwright/test";

test.describe('Session Storage', ()=>{
    test('Guest cars should be stored in Session storage', async({page})=>{
        // Залогиниться как гость
        await page.goto('/')
        const sessionStorageKey = "guestData"

        await page.locator('button', {hasText: 'Guest log in'}).click()

        // Создать машину
        await page.locator('button', {hasText: 'Add car'}).click()
        const popup = page.locator('.modal-content')
        const mileageInput = page.locator('#addCarMileage')
        await mileageInput.fill("123")
        await popup.locator('button', {hasText: 'Add'}).click()
        await page.pause()
        await expect (page.locator('.car-heading')).toBeVisible()

        // Достать данные из SessionStorage
        const userData = await page.evaluate(
            (key)=> window.sessionStorage.getItem(key),
            sessionStorageKey,
        )

        // Добавить ещё одну машину через json
        const parsed = JSON.parse(userData)
            parsed.cars.push({
                "id": 2,
                "brand": "WWW",
                "model": "model-X",
                "logo": "audi.png",
                "initialMileage": 123,
                "updatedMileageAt": "2024-08-06T17:50:42.940Z",
                "carCreatedAt": "2024-08-06T17:50:42.940Z",
                "carBrandId": 1,
                "carModelId": 1,
                "mileage": 888
            })

        const stringified = JSON.stringify(parsed) // объект в строку

        await page.evaluate(
            ({key, data}) => window.sessionStorage.setItem(key, data),
            {
                key: sessionStorageKey,
                data: stringified,
            },
        )
        await page.reload()
        await page.pause()
    })
})
