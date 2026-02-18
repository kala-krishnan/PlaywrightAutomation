import test,{expect} from "@playwright/test"
test.only("Handling frames using index" ,async({page})=>{
    await page.goto("https://leafground.com/frame.xhtml")
    const frameNumbers = page.frames()
    console.log(frameNumbers.length)
    await frameNumbers[1].locator("#Click").click()
    console.log(await frameNumbers[1].locator("#Click").innerText())
    frameNumbers[4].locator("#Click").click()
  console.log(await frameNumbers[4].locator("#Click").innerText())
})

test("Handling frame using FrameLocator",async({page})=>{
 await page.goto("https://leafground.com/frame.xhtml")
 page.frameLocator("(//iframe)[1]").locator("#Click").click()
page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

})

test("Handling frame using Frame Object",async({page})=>{
 await page.goto("https://leafground.com/frame.xhtml")
 page.frame({url:'https://leafground.com/default.xhtml'})?.locator("#Click").click()
 // page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
page.frame({name:'frame2'})?.locator("#Click").click()


})