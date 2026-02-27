  import test from "@playwright/test"
  import logData from '../../../data/LF_TestData.json'

  for(let login of logData)
  {
  test(`SALESFORCE Login ${login.TestID}` ,async({page})=>{
  await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill(login.Username)
    await page.locator("#password").fill(login.Password)
     await page.locator("#Login").click()
    await page.waitForTimeout(12000) 
  })}
 let singleLogin = logData[0]
  {
  test.only(`SALESFORCE Login using single data ${singleLogin.TestID}` ,async({page})=>{
  await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator("#username").fill(singleLogin.Username)
    await page.locator("#password").fill(singleLogin.Password)
     await page.locator("#Login").click()
    await page.waitForTimeout(12000) 
  })}