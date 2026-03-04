import { customFixture } from "./LoginFixture";

customFixture("Click Accounts",async({testLeafLogin})=>{
     //  await page.locator("//a[contains(text(),'CRM/SFA')]").click()
         await testLeafLogin.locator("//a[text()='Leads']").click()
         await testLeafLogin.locator("//a[text()='Create Lead']").click()
   
})