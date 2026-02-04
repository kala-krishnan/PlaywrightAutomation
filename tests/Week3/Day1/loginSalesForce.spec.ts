import test from "@playwright/test"
test("Launching SalesForce Website " ,async({page})=>{
    //await page.goto("https://www.google.com")

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
     await page.locator("#Login").click()
    await page.waitForTimeout(12000) 
   
    await page.locator(`[title='App Launcher']`).click()

    


})