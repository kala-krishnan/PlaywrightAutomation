
import {test,expect} from '@playwright/test'


test("BBuying Shoes in Decathon",async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await expect(page).toHaveTitle('Buy Sporting Goods, Sportswear and Equipments | Download App')
    await page.getByText('Search for').first().click()
     const searchbutton = page.getByRole('textbox')

    await expect(searchbutton).toBeEnabled()
    if(await searchbutton.isEnabled())
    {
        await searchbutton.fill("shoes")
        await searchbutton.press('Enter')
    }
    await page.waitForLoadState('domcontentloaded');
    const shoesPage = await page.title()
   
    await expect(shoesPage).toEqual("Search | shoes")
         await page.locator("//span[contains(text(),'Running')]")
          .click(); 
      await page.locator("//span[contains(text(),'Men')]")
          .click();
      await page.locator("//span[contains(text(),'Uk 10.5')]")
          .click();    
      

  await page.locator("//span[text()='Most Relevant']").click()
  await page.locator("//li/a[(text()='Price: High to Low')]").click()
  await page.locator("//p[text()='Men Running and Trail Running Shoes, Kiprun JF 190 Grip - Silver Grey']").click()
  await page.locator("//div[@id='size-select-container']//div[text()='UK 10.5 - EU 45']").click()

  await page.locator("//span[text()='ADD TO CART']").click()
 

//   await page.getByRole("link", { name: "cart" }).first().click();

//   await page.waitForTimeout(5000)   
//  const totalLocator =  page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']/p")
//  const totalPrice = await totalLocator.innerText();
//  console.log("Final total amount is:", totalPrice);

 await page.locator("//p[text()='Cart']").click()
   // let total = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]/p').innerText()
   await page.locator(`div[data-test-id="order-summary-item-container"]`).innerText()

//const totalAmount = await page.locator('text=₹').first().textContent();
  //console.log('Total Cart Amount:', totalAmount);
 //   console.log(`Total amount of the Price: ${total}`);

})