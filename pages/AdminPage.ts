import { Base } from "./BasePage";

export class AdminPage extends Base {

    private readonly addUser = "//button[.=' Add ']"
    private readonly userRole = "div.oxd-select-text-input"
    private readonly employeeName = "Type for hints..."
    private readonly username = "(//input[@class='oxd-input oxd-input--active'])[2]"
    private readonly status = "div.oxd-select-text-input"
    private readonly password = "input[type='password']"
    private readonly confirmPassword = "input[type='password']"
    private readonly saveButton = "//button[.=' Save ']"

    private readonly searchUsername = "(//input[@class='oxd-input oxd-input--active'])[2]"
    private readonly searchButton = "//button[.=' Search ']"
    private readonly deleteButton = "//button[@class='oxd-icon-button oxd-table-cell-action-space'][1]"
    private readonly deleteConfirmButton = "//button[.=' Yes, Delete ']"
    private readonly editButton = "//button[@class='oxd-icon-button oxd-table-cell-action-space'][2]"

    async createUser(userRole: string, employeeName: string, status: string, username: string, password: string, confirmPassword: string) {
        await this.page.locator(this.addUser).click()
        await this.page.locator(this.userRole).nth(0).click()
        await this.page.locator(`//div[@role='listbox']//span[.='${userRole}']`).click()
        await this.page.getByPlaceholder(this.employeeName).fill(employeeName)

        await this.page.waitForTimeout(5000); // or wait for dropdown

        await this.page.getByRole('option').first().click();


        await this.page.locator(this.status).nth(1).click()
        await this.page.locator(`//div[@role='listbox']//span[.='${status}']`).click()
        await this.page.locator(this.username).fill(username)
        await this.page.locator(this.password).nth(0).fill(password)
        await this.page.locator(this.confirmPassword).nth(1).fill(confirmPassword)
    }
    async saveUser() {
        await this.page.locator(this.saveButton).click()
    }
    async searchUser(username: string) {
        await this.page.locator(this.searchUsername).fill(username)
        await this.page.locator(this.searchButton).click()
    }

    async isAddUserVisible() {
        await this.page.waitForSelector(this.addUser, { timeout: 5000 })
        return await this.page.locator(this.addUser).isVisible()
    }

}