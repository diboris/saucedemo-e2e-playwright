exports.YourInformationPage = class YourInformationPage {
    constructor(page) {
        this.page = page
        this.firstNameInput = page.locator('input[data-test="firstName"]')
        this.lastNameInput = page.locator('input[data-test="lastName"]')
        this.postalCodeInput = page.locator('input[data-test="postalCode"]')
        this.continueButton = page.locator('input[data-test="continue"]')
    }

    async enterUserDetails(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)
    }

    async gotoOverviewPage() {
        await this.continueButton.click()
    }
}
