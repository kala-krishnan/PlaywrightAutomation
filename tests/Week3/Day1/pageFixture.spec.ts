import test from "@playwright/test"
test("Page Fixture " ,async({page})=>{
    //await page.goto("https://www.google.com")

    await page.goto("https://leaftaps.com/opentaps/control/main")
   await page.locator("#username").fill("DemoSalesManager")
   await page.locator("#password").fill("crmsfa")
   await page.locator(".decorativeSubmit").click()
   await page.locator(`text='CRM/SFA'`).click
}

)