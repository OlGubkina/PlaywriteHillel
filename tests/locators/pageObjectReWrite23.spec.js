import {expect, test} from "@playwright/test"
import WelcomePage from "../../src/pageObjects/welcomePage/WelcomePage.js";

test.describe("PageObject re-write", () => {
    let signupPopup

    test.beforeEach(async ({page}) => {
        const welcomePage = new WelcomePage(page)
        await welcomePage.navigate()
        signupPopup = await welcomePage.clickSignupButton()
    })

    test.describe("Name field TCs", () => {
        test("1.Name field > Name is correct", async ({page}) => {
            await signupPopup.nameInput.fill("Olga")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("2.Name field > Name is correct: long min = 2 symbols", async ({page}) => {
            await signupPopup.nameInput.fill("Aa")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("3.Name field > Name is correct: long max = 20 symbols", async ({page}) => {
            await signupPopup.nameInput.fill("Aaaaaaaaaaaaaaaaaaaa")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("4.Name field > Empty field", async ({page}) => {
            await signupPopup.nameInput.fill("")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.nameValidationMessage).toHaveText('Name required')
            await expect(signupPopup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("5.Name field > Name is invalid: Numbers", async ({page}) => {
            await signupPopup.nameInput.fill("111")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.nameValidationMessage).toHaveText('Name is invalid')
            await expect(signupPopup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("6.Name field > Name is invalid: Space", async ({page}) => {
            await signupPopup.nameInput.fill("Anna Maria")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.nameValidationMessage).toHaveText('Name is invalid')
            await expect(signupPopup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("7.Name field > Name long: too short", async ({page}) => {
            await signupPopup.nameInput.fill("A")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.nameValidationMessage).toHaveText('Name has to be from 2 to 20 characters long')
            await expect(signupPopup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("8.Name field > Name long: too long", async ({page}) => {
            await signupPopup.nameInput.fill("Aaaaaaaaaaaaaaaaaaaaa")
            await signupPopup.nameInput.blur()

            await expect(signupPopup.nameValidationMessage).toHaveText('Name has to be from 2 to 20 characters long')
            await expect(signupPopup.nameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })
    })

    test.describe("Last name field TCs", () => {
        test("1.LastName field > Empty field", async ({page}) => {
            await signupPopup.lastNameInput.fill("")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.lastNameValidationMessage).toContainText('Last name required')
            await expect(signupPopup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("2.LastName field > LastName is invalid: Numbers", async ({page}) => {
            await signupPopup.lastNameInput.fill("111")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.lastNameValidationMessage).toContainText('Last name is invalid')
            await expect(signupPopup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("3.LastName field > LastName is invalid: Space", async ({page}) => {
            await signupPopup.lastNameInput.fill("Sanchez Perez")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.lastNameValidationMessage).toContainText('Last name is invalid')
            await expect(signupPopup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("4.LastName field > LastName long: too short", async ({page}) => {
            await signupPopup.lastNameInput.fill("A")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.lastNameValidationMessage).toContainText('Last name has to be from 2 to 20 characters long')
            await expect(signupPopup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("5.LastName field > LastName long: too long", async ({page}) => {
            await signupPopup.lastNameInput.fill("Aaaaaaaaaaaaaaaaaaaaa")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.lastNameValidationMessage).toContainText('Last name has to be from 2 to 20 characters long')
            await expect(signupPopup.lastNameInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("6.LastName field > LastName long min = 2 symbols", async ({page}) => {
            await signupPopup.lastNameInput.fill("Aa")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("7.LastName field > Name long max = 20 symbols", async ({page}) => {
            await signupPopup.lastNameInput.fill("Aaaaaaaaaaaaaaaaaaaa")
            await signupPopup.lastNameInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })
    })

    test.describe("Email field TCs", () => {
        test("1.Email field > Email is correct", async ({page}) => {
            await signupPopup.emailInput.fill("olga.gubkina+5@gmail.com")
            await signupPopup.emailInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("2.Email field > Empty field", async ({page}) => {
            await signupPopup.emailInput.focus()
            await signupPopup.emailInput.blur()

            await expect(signupPopup.emailValidationMessage).toHaveText('Email required')
            await expect(signupPopup.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("3.Email field > Email is incorrect", async ({page}) => {
            await signupPopup.emailInput.fill("1")
            await signupPopup.emailInput.blur()

            await expect(signupPopup.emailValidationMessage).toHaveText('Email is incorrect')
            await expect(signupPopup.emailInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })
    })

    test.describe("Password field TCs", () => {
        test("1.Password field > Password is correct", async ({page}) => {
            await signupPopup.passwordInput.fill("12345678oA")
            await signupPopup.passwordInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("2.Password field > Empty Password", async ({page}) => {
            await signupPopup.passwordInput.focus()
            await signupPopup.passwordInput.blur()

            await expect(signupPopup.passwordValidationMessge).toHaveText('Password required')
            await expect(signupPopup.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("3.Password field > Incorrect password: < 8 symbols", async ({page}) => {
            await signupPopup.passwordInput.fill("aA34567")
            await signupPopup.passwordInput.blur()

            await expect(signupPopup.passwordValidationMessge).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            await expect(signupPopup.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("Password field > Incorrect password: > 15 symbols", async ({page}) => {
            await signupPopup.passwordInput.fill("1234567890aA1231")
            await signupPopup.passwordInput.blur()

            await expect(signupPopup.passwordValidationMessge).toHaveText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
            await expect(signupPopup.passwordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })
    })

    test.describe("Re-enter Password field TCs", () => {
        test("1.Re-enter Password > Password = Re-enter Password", async ({page}) => {
            await signupPopup.passwordInput.fill("12345678oA")
            await signupPopup.repeatPasswordInput.fill("12345678oA")
            await signupPopup.passwordInput.blur()

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("2.Re-enter Password > Password != Re-enter Password", async ({page}) => {
            await signupPopup.passwordInput.fill("12345678oA")
            await signupPopup.repeatPasswordInput.fill("02345678oA")
            await signupPopup.repeatPasswordInput.blur()

            await expect(signupPopup.repeatPasswordValidationMessge).toHaveText('Passwords do not match')
            await expect(signupPopup.repeatPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })

        test("3.Re-enter Password > Empty RepeatPassword", async ({page}) => {
            await signupPopup.repeatPasswordInput.focus()
            await signupPopup.repeatPasswordInput.blur()

            await expect(signupPopup.repeatPasswordValidationMessge).toHaveText('Re-enter password required')
            await expect(signupPopup.repeatPasswordInput).toHaveCSS('border-color', 'rgb(220, 53, 69)')

            await expect(signupPopup.registerButton).toBeDisabled()
        })
    })

    test.describe("Button Register", () => {
        test("1.Fill the form", async ({page}) => {

            // Fill the form - лучше заменить на функцию?
            await signupPopup.nameInput.fill("Olga")
            await signupPopup.lastNameInput.fill("Gubkina")
            await signupPopup.emailInput.fill("olga.gubkina+aqa@gmail.com")
            await signupPopup.passwordInput.fill("aA123456789")
            await signupPopup.repeatPasswordInput.fill("aA123456789")

            await expect(signupPopup.registerButton).toBeEnabled()
            //клик, проверка запроса на 201, проверка БД на новую запись
        })
    })
})