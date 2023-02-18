exports.YourCartPage = class YourCartPage {
    constructor(page) {
        this.page = page
        this.productName = page.locator('.cart_item .inventory_item_name')
        this.productPrice = page.locator('.cart_item .inventory_item_price')
        this.checkoutButton = page.locator('button[data-test="checkout"]')
        this.productQuantity = page.locator('.cart_quantity')
    }

    async getProductName() {
        return await this.productName.textContent()
    }

    async getProductPrice() {
        return await this.productPrice.textContent()
    }

    async goToCheckout() {
        await this.checkoutButton.click()
    }
}
