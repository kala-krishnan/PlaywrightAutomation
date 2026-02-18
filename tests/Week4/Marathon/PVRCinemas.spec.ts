
import {test,expect} from '@playwright/test'


test("Booking Movie Ticket in PVR Cinemas",async({page})=>{
  let row='K'
  let seat='7'

    await page.goto("https://www.pvrcinemas.com/")
   // console.log(page.title())
   // await expect(page.title()).toEqual("PVR Cinemas")
   // await page.getByAltText("map").nth(2).click()
    await page.locator("//h6[text()='Chennai']").click()
    await page.locator("//div[@class='date-show']/span[text()='Cinema']").click()
    await page.locator("//div[@role='button' and @aria-label='Select Cinema']").click()
 
    await page.locator("//li[@class='p-dropdown-item']/span[text()='INOX The Marina Mall, OMR, Chennai']").click()

    const tomorrowbutton =  await page.locator("//li/span[contains(text(),'Tomorrow')]")
    await tomorrowbutton.waitFor({state:'visible'})
    await tomorrowbutton.click()

    await page.locator("//span[text()='MY LORD']").nth(1).click();//movie names are changing dynamically.

    await page.locator("//span[text()='07:10 PM']").click()
   await page.locator("(//button/span[text()='Book'])[4]").click()

 //   await page.locator("//button[text()='Accept']").click()
    await page.locator("//button[text()='Accept']").click()
    await page.locator(`//span[contains(@id,'|${row}:${seat}')]`).click()
    const seatNumber = await page.locator("//div[@class='seat-number']").innerText()
       console.log(`seatNumber is ${seatNumber}`)
       await expect(seatNumber).toEqual(`${row}${seat}`)
    const grandPrice = await page.locator("//div[@class='grand-prices']").innerText()
    console.log(`Ticket Price is ${grandPrice}`)
    await page.locator("//button[text()='Proceed']").click()

})