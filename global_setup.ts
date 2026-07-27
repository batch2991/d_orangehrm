import { chromium,request } from "@playwright/test";
import {ENV} from "./playwright.config"

async function setup() {
    // let c=await request.newContext()
    // c.post()

    let browser = await chromium.launch()
    let context = await browser.newContext()
    let page = await context.newPage()

    await page.goto(ENV.homeurl)
    await page.getByPlaceholder("Username").fill(ENV.uid)
    await page.getByPlaceholder("Password").fill(ENV.pwd)
    await page.locator("//button[.=' Login ']").click()
    await page.waitForURL(ENV.dashboardurl)
    await context.storageState({path:"./loginauth.json"})  ///store the session details into loginauth.json file
    await page.close()
}

export default setup
