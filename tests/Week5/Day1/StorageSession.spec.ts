  import test from "@playwright/test"
test("Storage session feil",async({page})=>{
    
    await page.goto(url)
        await page.locator("#username").fill(username)
    await page.locator("#password").fill(pWord)
     await page.locator("#Login").click()
    await page.waitForTimeout(12000) 
})