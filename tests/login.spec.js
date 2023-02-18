import faker from 'faker'

const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pages/login-page')

const usernames = ['standard_user', 'problem_user', 'performance_glitch_user']
for (let i = 0; i < usernames.length; i++) {
    test('A ' + usernames[i] + ' user can login', async ({page}) => {
        const loginPage = new LoginPage(page)
        const username = usernames[i]

        await loginPage.goto()
        await loginPage.login(username, 'secret_sauce')

        await expect(page).toHaveURL('/inventory.html')
    })
}

test('A user can logout', async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce')

    await loginPage.userMenuButtonClick()
    await loginPage.logoutButtonClick()

    await expect(page).toHaveURL('/')
})

test('A user can not login with empty credentials', async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('', '')

    await expect(loginPage.errorMessage).toContainText('Username is required')
    await expect(page).toHaveURL('/')
})

test('A user can not login without password', async ({page}) => {
    const loginPage = new LoginPage(page)
    const username = faker.internet.userName()

    await loginPage.goto()
    await loginPage.login(username, '')

    await expect(page).toHaveURL('/')
    await expect(loginPage.errorMessage).toContainText('Password is required')
})

test('A user can not login with invalid password', async ({page}) => {
    const loginPage = new LoginPage(page)
    const password = faker.internet.password()

    await loginPage.goto()
    await loginPage.login('standard_user', password)

    await expect(page).toHaveURL('/')
    await expect(loginPage.errorMessage).toContainText('Username and password do not match any user in this service')
})

test('A locked out user can not login', async ({page}) => {
    const loginPage = new LoginPage(page)

    await loginPage.goto()
    await loginPage.login('locked_out_user', 'secret_sauce')

    await expect(page).toHaveURL('/')
    await expect(loginPage.errorMessage).toContainText('Epic sadface: Sorry, this user has been locked out.')
})
