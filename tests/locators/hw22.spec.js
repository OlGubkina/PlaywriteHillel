import {expect, test} from "@playwright/test"

test.describe("Home work locators", () => {
    test.beforeEach(async ({page}) => {
        await page.goto("/")
        const signUpBtn = page.locator(".hero-descriptor_btn")
        await signUpBtn.click()
    })

    test.describe("Name field TCs", () => {
        test("Name field > Name is correct", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("Olga")
            await nameInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Name is correct: long min = 2 symbols", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("Aa")
            await nameInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Name is correct: long max = 20 symbols", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("Aaaaaaaaaaaaaaaaaaaa")
            await nameInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Empty field", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.focus()
            await nameInput.blur()

            const inputNameTip = page.locator('.invalid-feedback > p')
            await expect(inputNameTip).toContainText('Name required')
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Name is invalid: Numbers", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("111")
            await nameInput.blur()

            const inputNameTip1 = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputNameTip1).toContainText('Name is invalid')
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Name is invalid: Space", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("Anna Maria")
            await nameInput.blur()

            const inputNameTip1 = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputNameTip1).toContainText('Name is invalid')
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Name long: too short", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("A")
            await nameInput.blur()

            const inputNameTip1 = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputNameTip1).toContainText('Name has to be from 2 to 20 characters long')
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Name field > Name long: too long", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')

            await nameInput.fill("Aaaaaaaaaaaaaaaaaaaaa")
            await nameInput.blur()

            const inputNameTip1 = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputNameTip1).toContainText('Name has to be from 2 to 20 characters long')
            await expect(nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })
    })

    test.describe("Last name field TCs", () => {
        test("LastName field > Empty field", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.focus()
            await lastNameInput.blur()

            const inputLastNameTip = page.locator('.invalid-feedback > p')
            await expect(inputLastNameTip).toContainText('Last name required')
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("LastName field > LastName is invalid: Numbers", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.fill("111")
            await lastNameInput.blur()

            const inputLastNameTip = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputLastNameTip).toContainText('Last name is invalid')
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("LastName field > LastName is invalid: Space", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.fill("Sanchez Perez")
            await lastNameInput.blur()

            const inputLastNameTip = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputLastNameTip).toContainText('Last name is invalid')
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("LastName field > LastName long: too short", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.fill("A")
            await lastNameInput.blur()

            const inputLastNameTip = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(inputLastNameTip).toContainText('Last name has to be from 2 to 20 characters long')
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("LastName field > LastName long: too long", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.fill("Aaaaaaaaaaaaaaaaaaaaa")
            await lastNameInput.blur()

            const lastNameInputNameTip = page.locator('.invalid-feedback > :nth-child(1)')
            await expect(lastNameInputNameTip).toContainText('Last name has to be from 2 to 20 characters long')
            await expect(lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("LastName field > LastName long min = 2 symbols", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.fill("Aa")
            await lastNameInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("LastName field > Name long max = 20 symbols", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const lastNameInput = form.locator('#signupLastName')

            await lastNameInput.fill("Aaaaaaaaaaaaaaaaaaaa")
            await lastNameInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })
    })

    test.describe("Email field TCs", () => {
        test("Email field > Email is correct", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const emailInput = form.locator('#signupEmail')

            await emailInput.fill("olga.gubkina+5@gmail.com")
            await emailInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Email field > Empty field", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const emailInput = form.locator('#signupEmail')

            await emailInput.focus()
            await emailInput.blur()

            const emailInputTip = page.locator('.invalid-feedback > p')
            await expect(emailInputTip).toContainText('Email required')
            await expect(emailInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Email field > Email is incorrect", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const emailInput = form.locator('#signupEmail')

            await emailInput.fill("1")
            await emailInput.blur()

            const emailInputTip = page.locator('.invalid-feedback > p')
            await expect(emailInputTip).toContainText('Email is incorrect')
            await expect(emailInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })
    })

    test.describe("Password field TCs", () => {
        test("Password field > Password is correct", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const PasswordInput = form.locator('#signupPassword')

            await PasswordInput.fill("12345678oA")
            await PasswordInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Password field > Empty Password", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const PasswordInput = form.locator('#signupPassword')

            await PasswordInput.focus()
            await PasswordInput.blur()

            const PasswordInputTip = page.locator('.invalid-feedback > p')
            await expect(PasswordInputTip).toContainText('Password required')
            await expect(PasswordInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Password field > Incorrect password: < 8 symbols", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const PasswordInput = form.locator('#signupPassword')

            await PasswordInput.fill("aA34567")
            await PasswordInput.blur()

            const PasswordInputTip = page.locator('.invalid-feedback > p')
            await expect(PasswordInputTip).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            await expect(PasswordInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Password field > Incorrect password: > 15 symbols", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const PasswordInput = form.locator('#signupPassword')

            await PasswordInput.fill("1234567890aA1231")
            await PasswordInput.blur()

            const PasswordInputTip = page.locator('.invalid-feedback > p')
            await expect(PasswordInputTip).toContainText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            await expect(PasswordInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })
    })

    test.describe("Re-enter Password field TCs", () => {
        test("Re-enter Password > Password = Re-enter Password", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const PasswordInput = form.locator('#signupPassword')
            const RepeatPasswordInput = form.locator('#signupRepeatPassword')

            await PasswordInput.fill("12345678oA")
            await RepeatPasswordInput.fill("12345678oA")
            await PasswordInput.blur()

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Re-enter Password > Password != Re-enter Password", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const PasswordInput = form.locator('#signupPassword')
            const RepeatPasswordInput = form.locator('#signupRepeatPassword')

            await PasswordInput.fill("12345678oA")
            await RepeatPasswordInput.fill("02345678oA")
            await RepeatPasswordInput.blur()

            const RePasswordInputTip = page.locator('.invalid-feedback > p')
            await expect(RePasswordInputTip).toContainText('Passwords do not match')
            await expect(RePasswordInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })

        test("Re-enter Password > Empty RepeatPassword", async ({page}) => {
            const form = page.locator('app-signup-modal form')
            const RepeatPasswordInput = form.locator('#signupRepeatPassword')

            await RepeatPasswordInput.focus()
            await RepeatPasswordInput.blur()

            const RePasswordInputTip = page.locator('.invalid-feedback > p')
            await expect(RePasswordInputTip).toContainText('Re-enter password required')
            await expect(RePasswordInputTip).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeDisabled()
        })
    })

    test.describe("Button Register", () => {
        test("Fill the form", async ({page}) => {
            // Reg form locators:
            const form = page.locator('app-signup-modal form')
            const nameInput = form.locator('#signupName')
            const lastNameInput = form.locator('#signupLastName')
            const emailInput = form.locator('#signupEmail')
            const passwordInput = form.locator('#signupPassword')
            const repeatPasswordInput = form.locator('#signupRepeatPassword')

            // Fill the form
            await nameInput.fill("Olga")
            await lastNameInput.fill("Gubkina")
            await emailInput.fill("olga.gubkina+5@gmail.com")
            await passwordInput.fill("aA123456789")
            await repeatPasswordInput.fill("aA123456789")

            const registerBtn = page.locator(".modal-footer > .btn")
            await expect(registerBtn).toBeEnabled()
            //клик, проверка запроса на 201, проверка БД на новую запись
        })
    })
})