exports.ProductsListPage = class ProductsListPage {
    constructor(page) {
        this.page = page
        this.productName = page.locator('.inventory_item_description .inventory_item_name')
        this.productPrice = page.locator('.inventory_item .inventory_item_price')
        this.addToCartButton = page.locator('.inventory_item button')
        this.goToCartButton = page.locator('.shopping_cart_container')
        this.sortDropdown = page.locator('select[data-test="product_sort_container"]')
        this.productPrice = page.locator('.inventory_item .inventory_item_price')
    }

    async getFirstProductName() {
        return await this.productName.first().textContent()
    }

    async getFirstProductPrice() {
        return await this.productPrice.first().textContent()
    }

    async selectFirstProduct() {
        await this.addToCartButton.first().click()
    }

    async openShoppingCart() {
        await this.goToCartButton.click()
    }

    async sortBy(type) {
        await this.sortDropdown.selectOption(type)
    }

    async getAllProductsPrices() {
        const pricesWithCurrency = await this.productPrice.allTextContents()
        const prices = []
        for (let i = 0; i < pricesWithCurrency.length; i++) {
            const priceWithCurrency = pricesWithCurrency[i]
            const priceString = priceWithCurrency.substring(1)
            const price = Number(priceString)
            prices.push(price)
        }
        return prices
    }
}
