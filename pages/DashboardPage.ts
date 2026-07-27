import { Base } from "./BasePage"

export class DashboardPage extends Base
{
   
    private readonly heading="//h6[.='Dashboard']"
    private readonly profilepic="profile picture"
    private readonly logoutlink="Logout"
    private readonly Adminlink="//span[.='Admin']"

    async checkHeadingisVisible()
    {
        await this.page.waitForSelector(this.heading,{timeout:20000})
        return await this.page.locator(this.heading).isVisible()
    }
    async logout()
    {
         await this.page.getByAltText(this.profilepic).nth(0).click()
         await this.page.getByText(this.logoutlink).click()
    }
    async navigateToAdmin()
    {
        await this.page.locator(this.Adminlink).click()
    }
    async f1()
    {
        console.log("hello")
    }
}