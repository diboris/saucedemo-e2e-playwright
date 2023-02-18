exports.OrderCompletePage = class OrderCompletePage {
    constructor(page) {
        this.page = page
        this.checkOutCompleteMsg = page.locator('h2')
    }
}