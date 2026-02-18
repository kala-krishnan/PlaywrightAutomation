

import {test,expect} from '@playwright/test'
test('Uploading Files to Heroku',async({page})=>{
    
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("Data/PW-W4-Alert-Frame.pdf")
  
   //  await page.waitForTimeout(5000)
     const fileUpload=page.waitForEvent('filechooser')
    await page.locator("#drag-drop-upload").first().click()
     const filechooser = await fileUpload
      await filechooser.setFiles("Data/Animal.png")



     await page.waitForTimeout(5000)
       await page.locator("#file-submit").click()
      console.log(await page.locator("//div/h3[text()='File Uploaded!']").innerText())



})