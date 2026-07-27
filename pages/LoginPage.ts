import { Base } from "./BasePage"

export class LoginPage extends Base
{
    private readonly userinput="Username"
    private readonly passwordinput="Password"
    private readonly loginbtn="//button[.=' Login ']"

    private readonly errormsg="Invalid credentials"

    async login(username:string,password:string)
    {
       await this.page.getByPlaceholder(this.userinput).fill(username)
       await this.page.getByPlaceholder(this.passwordinput).fill(password)
       await this.page.locator(this.loginbtn).click()
       
       
    }

    async getErrorMessage()
    {
       return await this.page.getByText(this.errormsg).textContent()
    }
}
