import test,{expect} from "@playwright/test"
test("Service Now Application Testing" ,async({page})=>{
await page.goto("https://dev363522.service-now.com/")
await page.locator("#user_name").fill("admin")
await page.locator("#user_password").fill("mf=3hp^0UJMZ")
await page.locator("#sysverb_login").click()
await page.getByRole('menuitem',{name :'All'}).click()
await page.getByRole('link',{name:'Service Catalog 3 of 23'}).click()
await page.frameLocator('iframe').first().getByAltText("Mobiles").click();
await page.frameLocator('iframe').first().getByText("Apple iPhone 13 pro").nth(1).click();
  await page.frameLocator('iframe').first().locator("//label[text()='Yes']").click()
await page.frameLocator('iframe').first().getByRole('textbox',{name:'What was the original'}).fill("99")
     await page.frameLocator('iframe').first().getByRole('combobox',{name:'Mandatory - must be'}).selectOption('unlimited')
     await page.frameLocator('iframe').first().locator("//label[text()='Sierra Blue']").click()
     await page.frameLocator('iframe').first().locator("//label[contains(text(),'512 GB')]").click()
    await page.frameLocator('iframe').first().locator("#oi_order_now_button").click()
   
     await page.frameLocator('iframe').first().locator("//div[@class='notification notification-success']//span[2]").click()
    await page.waitForTimeout(2000);
    await page.screenshot({path:'Screenshot/CartPage.png',fullPage:true})
})