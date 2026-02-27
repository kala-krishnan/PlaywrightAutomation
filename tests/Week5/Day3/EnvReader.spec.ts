  import test from "@playwright/test"
import dotenv from 'dotenv'


dotenv.config({path:'data/LT_TestQA.env'})
    test("SALESFORCE Login for single Env file",async({page})=>{
        let url = process.env.LT_URL as string
        let username = process.env.LT_Username as string
        let pWord = process.env.LT_Password as string
    await page.goto(url)
        await page.locator("#username").fill(username)
    await page.locator("#password").fill(pWord)
     await page.locator("#Login").click()
    await page.waitForTimeout(12000) 



    })