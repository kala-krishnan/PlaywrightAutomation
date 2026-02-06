import test,{expect} from "@playwright/test"
test("Adding New Opportunities " ,async({page})=>{


    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
     await page.locator("#Login").click()
    await page.waitForTimeout(12000)  
    await page.locator(`[title='App Launcher']`).click()
    await page.locator("//button[text()='View All']").click()
    await page.getByPlaceholder("Search apps or items...").fill("Opportunities")  
    await page.locator("//a[@data-label='Opportunities']").click() 
    await page.locator("//div[@title='New']").click()
    await page.locator("//input[@name='Name']").fill("Kala")
    await page.locator("//input[@name='CloseDate']").fill("07/02/2026")
    await page.locator("//button[@role='combobox' and @aria-label='Stage']").focus()
    await page.keyboard.press('Enter');
    await page.getByRole('option', { name: 'Needs Analysis' }).waitFor({ state: 'visible' });
    await page.getByRole('option', { name: 'Needs Analysis' }).click();
    await page.getByPlaceholder("Search Accounts...").click()
    await page.locator("//lightning-base-combobox-item//span[text()='SystemLeaf']").click() 
    await page.locator("//button[@name='SaveEdit']").click()
       let toastmessage = await page.locator("//div[@class='slds-hyphenate']//span").innerText()
    console.log("toastMessage "+toastmessage)
    let OpportunitiesName = toastmessage.split('"')
    console.log("LeadName "+OpportunitiesName[1])
      expect(OpportunitiesName[1]).toEqual("Kala")
    

})