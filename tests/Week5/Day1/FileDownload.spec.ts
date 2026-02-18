
import {test,expect} from '@playwright/test'
test('downloading Files from leafground',async({page})=>{ 
    await page.goto("https://leafground.com/file.xhtml")
    const downloadPromise = page.waitForEvent('download')
    await page.locator("//span[text()='Download']").click()
    const downloadFile = await downloadPromise
    await downloadFile.saveAs("Data/"+downloadFile.suggestedFilename())

})