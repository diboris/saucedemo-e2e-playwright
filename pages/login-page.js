exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page
        this.usernameInput = page.locator('input[data-test="username"]')
        this.passwordInput = page.locator('input[data-test="password"]')
        this.loginButton = page.locator('input[data-test="login-button"]')
        this.logoutButton = page.locator('#logout_sidebar_link')
        this.userMenuButton = page.locator('#react-burger-menu-btn')
        this.errorMessage = page.locator('h3[data-test="error"]')
    }

    async goto() {
        await this.page.goto('/')
    }

    async login(email, password) {
        if (email) {
            await this.usernameInput.fill(email)
        }
        if (password) {
            await this.passwordInput.fill(password)
        }
        // performance_glitch_user requires a higher timeout
        await this.loginButton.click({timeout: 8000})
    }

    async logoutButtonClick() {
        await this.logoutButton.click()
    }

    async userMenuButtonClick() {
        await this.userMenuButton.click()
    }
}
