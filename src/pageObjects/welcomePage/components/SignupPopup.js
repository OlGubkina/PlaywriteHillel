import BaseComponent from "../../component/BaseComponent.js";


export default class SignupPopup extends BaseComponent{
    constructor(page) {
        super(page, page.locator('app-signup-modal'))
        this.nameInput = this.container.locator('#signupName')
        this.nameValidationMessage = this.nameInput.locator(' + .invalid-feedback')

        this.lastNameInput = this.container.locator('#signupLastName')
        this.lastNameValidationMessage = this.lastNameInput.locator(' + .invalid-feedback')

        this.emailInput = this.container.locator('#signupEmail')
        this.emailValidationMessage = this.emailInput.locator(' + .invalid-feedback')

        this.passwordInput = this.container.locator('#signupPassword')
        this.passwordValidationMessge = this.passwordInput.locator(' + .invalid-feedback')

        this.repeatPasswordInput = this.container.locator('#signupRepeatPassword')
        this.repeatPasswordValidationMessge = this.repeatPasswordInput.locator(' + .invalid-feedback')

        this.registerButton = this.container.locator('.btn-primary')
    }

    async fill({email, password}){
        email && await this.emailInput.fill(email)               // если есть email?
        password && await this.passwordInput.fill(password)
    }

    async login({email, password}){
        await this.fill({email, password})
        await this.loginButton.click()
    }
}