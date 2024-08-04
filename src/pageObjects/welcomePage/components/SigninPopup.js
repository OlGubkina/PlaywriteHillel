import BaseComponent from "../../component/BaseComponent.js";


export default class SigninPopup extends BaseComponent{
    constructor(page) {
        super(page, page.locator('app-signin-modal'))
        this.emailInput = this.container.locator('#signinEmail')
        this.emailValidationMessage = this.emailInput.locator(' + .invalid-feedback')
        this.passwordInput = this.container.locator('#signinPassword')
        this.passwordValidationMessge = this.passwordInput.locator(' + .invalid-feedback')
        this.loginButton = this.container.locator('.btn-primary')
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