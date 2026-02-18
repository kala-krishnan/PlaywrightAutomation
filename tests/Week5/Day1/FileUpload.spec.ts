

import {test,expect} from '@playwright/test'


test("fIle Upload using setInputFiles",async({page})=>{
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(`//h2[text()="I'm experienced"]`).click()
    await page.locator("#resumeUpload").first().setInputFiles("Data/PW-W4-Alert-Frame.pdf")
    await page.waitForTimeout(5000)
    })

test.only("fIle Upload using eventListener",async({page})=>{
 await page.goto("https://www.naukri.com/registration/createAccount")
     await page.locator(`//h2[text()="I'm experienced"]`).click()
 const fileUpload=page.waitForEvent('filechooser')
  await page.locator("//button[text()='Upload Resume']").first().click()
  const filechooser = await fileUpload
  await filechooser.setFiles("Data/PW-W4-Alert-Frame.pdf")
  await page.waitForTimeout(5000)


})

