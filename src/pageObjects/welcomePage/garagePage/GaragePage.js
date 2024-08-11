import BasePage from "../../BasePage.js";

export default class GaragePage extends BasePage{
    constructor(page) {
        super(page, '/panel/garage', page.getByRole('button', {name: 'Add car'}))
        this.addCarButton = page.getByRole('button', {name: 'Add car'})
        this.garageHeading = page.getByRole('heading', {name: 'Garage'})
    }
}