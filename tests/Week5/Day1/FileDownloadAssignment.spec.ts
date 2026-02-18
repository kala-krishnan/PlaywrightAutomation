import {test,expect} from '@playwright/test'
test('Downloading Files from Heroku',async({page})=>{
    
    await page.goto("https://the-internet.herokuapp.com/download")
    const downloadPromise = page.waitForEvent('download')
    
     await page.locator("//div[@id='content']//a").nth(2).click()
         const downloadFile = await downloadPromise
    await downloadFile.saveAs("Data/"+downloadFile.suggestedFilename())
})