import {test,expect} from "../pages/Customfixtures"

test("Test Login for Valid credentials", async({page,loginPage,dashboardPage})=>{
    await page.context().clearCookies()   
    await loginPage.login("Admin","admin123")
    let status=await dashboardPage.checkHeadingisVisible()
    expect(status).toBeTruthy()
    await dashboardPage.logout()  
})
test("Test Login for InValid password", async({page,loginPage})=>{
    await page.context().clearCookies()
    await loginPage.login("Admin","123456")
    let errormessage=await loginPage.getErrorMessage()
    expect(errormessage).toContain("Invalid credentials")   
    
})