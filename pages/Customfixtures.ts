import {test as base} from '@playwright/test'
import { LoginPage } from './LoginPage'
import { DashboardPage } from './DashboardPage';
import { AdminPage } from './AdminPage';
import {ENV} from "../playwright.config"


type MyFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
    adminPage:AdminPage
};


export const test=base.extend<MyFixtures>({

    loginPage:async({page},use)=>{
        console.log("what ever code to be executed before Login fixurre") 
        await page.goto(ENV.homeurl)
        await use(new LoginPage(page))
        console.log("The code after login page fixture")        
    },
    dashboardPage:async({page},use)=>{
        console.log("what ever code to be executed before dashboard fixurre") 
         await page.goto(ENV.dashboardurl)
        await use(new DashboardPage(page))
        console.log("The code after dashboard fixture")        
    },
     adminPage:async({page},use)=>{
        console.log("what ever code to be executed before Admin page") 
        await use(new AdminPage(page))
        console.log("The code after Admin fixture")        
    },

})

export {expect} from "@playwright/test"
