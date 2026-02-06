import test, { expect } from "@playwright/test"
test("Adding New Individuals" ,async({page})=>{
    //await page.goto("https://www.google.com")

    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
     await page.locator("#Login").click()
    await page.waitForTimeout(6000)  
    await page.locator(`[title='App Launcher']`).click()
        await page.locator("//button[text()='View All']").click()
      await page.getByPlaceholder("Search apps or items...").fill("Individuals")
 
    await page.locator("//p[@class='slds-truncate']/mark[text()='Individuals']").click()

    await page.locator("//div[@title='New']").click()
    await page.getByLabel("Last Name").fill("Krishnan")
    await page.locator("//button/span[text()='Save']").click()
    let toastmessage = await page.locator("//div[@class='slds-hyphenate']//span").innerText()
    console.log("toastMessage "+toastmessage)
    let individualsName = toastmessage.split('"')
    console.log("IndividualsName "+individualsName[1])

     expect(individualsName[1]).toEqual("Krishnan")
})