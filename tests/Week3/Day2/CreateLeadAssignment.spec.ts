import test, { expect }  from "@playwright/test"
test("Creating Lead in Saleforce Website " ,async({page})=>{


    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
     await page.locator("#Login").click()
 
    await page.locator(`[title='App Launcher']`).click()
    await page.waitForTimeout(6000)  
    await page.locator("//button[text()='View All']").click()
    await page.locator("//p[text()='Sales']").click()
 
    await page.locator("(//span[text()='Leads'])[1]").click()
    await page.locator("//div[@title='New']").click()
    await page.locator("//button[@name='salutation']").click()
    await page.locator("//div//lightning-base-combobox-item[@data-value='Mrs.']")
    await page.locator("//input[@name='lastName']").fill("Kabir")
    await page.locator("//input[@name='Company']").fill("TestLeaf")
    await page.locator("//button[@name='SaveEdit']").click()
     
    let toastmessage = await page.locator("//div[@class='slds-hyphenate']//span").innerText()
    console.log("toastMessage "+toastmessage)
    let leadName = toastmessage.split('"')
    console.log("LeadName "+leadName[1])

     expect(leadName[1]).toEqual("Kabir")



    


})