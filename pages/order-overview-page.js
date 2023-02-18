exports.OrderOverviewPage = class OrderOverviewPage {
    constructor(page) {
        this.page = page
        this.finishButton = page.locator('button[data-test="finish"]')
        this.productQuantity = page.locator('.cart_quantity')
    }

    async finishButtonClick() {
        await this.finishButton.click()
    }
}