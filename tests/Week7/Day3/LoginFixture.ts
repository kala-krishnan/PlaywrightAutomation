import {test as login,Page} from "@playwright/test"  

export const customFixture = login.extend<{testLeafLogin:any}>({


testLeafLogin:async({page}:{page:Page},use:(arg0:Page)=>any)=>
{
       await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
     await page.locator(".decorativeSubmit").click()
    await page.waitForTimeout(4000) 
          await page.locator("//a[contains(text(),'CRM/SFA')]").click()
          await use(page)
}

})