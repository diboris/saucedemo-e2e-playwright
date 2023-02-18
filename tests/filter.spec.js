const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pages/login-page')
const {ProductsListPage} = require("../pages/products-list-page")

test('A user can filter product prices low high to high', async ({page, context}) => {
    const loginPage = new LoginPage(page)
    const productsListPage = new ProductsListPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')

    await productsListPage.sortBy('lohi')
    const actualPrices = await productsListPage.getAllProductsPrices()
    const expectedPrices = actualPrices.slice().sort((a, b) => a - b)

    expect(actualPrices).toEqual(expectedPrices)
})
