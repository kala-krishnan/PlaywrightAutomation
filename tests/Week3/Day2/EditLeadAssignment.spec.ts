import test from "@playwright/test"
test("Edit Lead Position " ,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(4000) 

    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator("#createLeadForm_companyName").fill("TestIcon")
    await page.locator("#createLeadForm_firstName").fill("Kala")
    await page.locator("#createLeadForm_lastName").fill("Krishnan")
    await page.locator("[name='submitButton']").click()
    await page.locator("//a[text()='Edit']").click()
     await page.locator("#updateLeadForm_companyName").fill("TestIcons")
     await page.locator("//input[@value='Update']").click()


})