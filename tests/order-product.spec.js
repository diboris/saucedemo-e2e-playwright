import faker from 'faker'

const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pages/login-page')
const {ProductsListPage} = require('../pages/products-list-page')
const {YourCartPage} = require('../pages/your-cart-page')
const {YourInformationPage} = require('../pages/your-information-page')
const {OrderOverviewPage} = require('../pages/order-overview-page')
const {OrderCompletePage} = require('../pages/order-complete-page')

test('A user can order a product', async ({page}) => {
    const loginPage = new LoginPage(page)
    const productsListPage = new ProductsListPage(page)
    const yourCartPage = new YourCartPage(page)
    const yourInformationPage = new YourInformationPage(page)
    const orderOverviewPage = new OrderOverviewPage(page)
    const orderCompletePage = new OrderCompletePage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')

    const productNameFromProductPage = await productsListPage.getFirstProductName()
    const productPriceFromProductPage = await productsListPage.getFirstProductPrice()

    await productsListPage.selectFirstProduct()
    await productsListPage.openShoppingCart()

    await expect(yourCartPage.productQuantity).toHaveText('1')

    const productNameFromCartPage = await yourCartPage.getProductName()
    await expect(productNameFromCartPage).toBe(productNameFromProductPage)

    const productPriceFromCartPage = await yourCartPage.getProductPrice()
    await expect(productPriceFromCartPage).toBe(productPriceFromProductPage)

    await yourCartPage.goToCheckout()

    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const postalCode = faker.address.zipCode()
    await yourInformationPage.enterUserDetails(firstName, lastName, postalCode)

    await yourInformationPage.gotoOverviewPage()

    await expect(orderOverviewPage.productQuantity).toHaveText('1')

    await orderOverviewPage.finishButtonClick()

    await expect(orderCompletePage.checkOutCompleteMsg).toHaveText('THANK YOU FOR YOUR ORDER')
})
