import test from "@playwright/test"
test("Editing New Individuals" ,async({page})=>{
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
          await page.locator("//input[@name='Individual-search-input']").fill("Krishnan")
          await page.keyboard.press('Enter');    
          await page.locator("//a[@class='slds-truncate']//span[text()='Krishnan']").click()
          await page.getByRole('button',{name:'Edit',exact:true}).click()
          await page.locator("(//a[@role='combobox'])[1]").click()
          await page.locator("//a[@role='option' and @title='Mr.']").click()
          await page.getByPlaceholder("First Name").fill("Muthu")
    await page.getByRole('button',{name:'Save',exact:true}).click()
     let toastmessage = await page.locator("//div[@class='slds-hyphenate']//span").innerText()
        console.log("toastMessage "+toastmessage)
        let individualsFirstName = toastmessage.split('"')
        console.log("Individuals First Name "+individualsFirstName[1])
    
         expect(individualsFirstName[1]).toEqual("Muthu")

      


})