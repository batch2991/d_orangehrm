import {test,expect} from '../pages/Customfixtures'
import {faker} from '@faker-js/faker'


test("Create a new user", async({dashboardPage,adminPage})=>{
    let username = faker.internet.username()
    let status=await dashboardPage.checkHeadingisVisible()
    expect(status).toBeTruthy()  
    await dashboardPage.navigateToAdmin()
    let addUserLink=await adminPage.isAddUserVisible()
    expect(addUserLink).toBeTruthy()
    await adminPage.createUser("Admin","A","Enabled",username,"Orange#2306","Orange#2306")
    await adminPage.saveUser()     
}) 
test("Search for a user", async({page,dashboardPage,adminPage})=>{   
    let status=await dashboardPage.checkHeadingisVisible()  
    expect(status).toBeTruthy()
    await dashboardPage.navigateToAdmin()
    let addUserLink=await adminPage.isAddUserVisible()
    expect(addUserLink).toBeTruthy()
    await adminPage.searchUser("messi")
    await page.waitForTimeout(5000)
    if(await page.getByText("No Records Found").isVisible()==false)
    {
        let searchresult=await page.locator("//div[@class='oxd-table-card']//div[2]//div[1]").textContent()
        expect(searchresult).toContain("messi")  
    } 
    else
    {
        console.log("No record found")
    }
}
)
 
////  20 tests
////before each only for test1   2   5   8   11
////before each will execute automatically for every test,,, we cannot configure to run only for few tests
     ////instead of writing beforeeach... we can create a function and call the function where ever needed.
     //// when we write a function..... we have to explicity call the functions. etiher before or after...
      /////////instead of that  we can create custom fixture so that this will automatically execute
                ///only for requried tests.... 

                /////execute the code before use callback
                //// use........ wait till the test is completed
                ///code after use code