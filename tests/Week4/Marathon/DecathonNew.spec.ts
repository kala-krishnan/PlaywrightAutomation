import {test,expect} from '@playwright/test'
test('Decathlon',async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await expect (page).toHaveURL("https://www.decathlon.in/")


    await expect(page.locator("(//span[contains(@class,'index-module')])[1]")).toBeEnabled()
     let searchBox =  page.locator("(//span[contains(@class,'index-module')])[1]")
    await searchBox.click()
    //freeze the dom for below step 
    //setTimeout(()=>{debugger},4000)
    let list = page.getByPlaceholder("Search For 60+ Sports and 6000+ Products")
    await list.fill("shoes")
    await list.press("Enter")
    let title = await page.title()
    console.log(title)
    await expect(page).toHaveTitle("Search | shoes")
    
    await page.locator("//span[contains(text(),'Running')]").click()
    await page.locator("//span[contains(text(),'Men ')]").click()
    await page.locator("//span[contains(text(),'Uk 10.5 ')]").click()
    await page.locator("//p[contains(@class,'inline-block relative')]").click()
    await page.getByText("Price: High to Low").click()
    await page.locator("//div[@class='swiper-slide swiper-slide-active']").first().click()
    await page.getByText("UK 10.5 - EU 45").click()
    await page.getByRole('button',{name:'addToCart'}).click()
    await page.locator("//p[text()='Cart']").click()
    let total = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]/p').innerText()
    console.log(`Total amount of the Price: ${total}`);




   // await page.getByRole('button',{name:"Login"}).click()
})




