import test,{expect} from "@playwright/test"
test("Launching SalesForce Website " ,async({page})=>{


    await page.goto("https://leafground.com/select.xhtml")
    await page.selectOption(".ui-selectonemenu",{value:'Playwright'})
   
    const values = ['Playwright','Selenium WebDriver','AWS']
    for(const value of values)
    {
         await page.locator("//button[@role='button' and @aria-label='Show Options']").focus()
        await page.keyboard.press('Enter')
        await page.locator("//span[@role='listbox']//li[text()='"+value+"']").click()
    }
    await page.locator("div[role='combobox']").filter({ hasText: 'Select Country' }).click();
    //await page.getByLabel('Select Country').click()
    //await page.keyboard.press('Enter')
    await page.locator("//div//li[text()='USA']").click()
    const citiesBelongedUSA = ['Denver','New York','San Francisco']
      await page.locator("div[role='combobox']").filter({ hasText: 'Select City' }).click();
    const cityList = page.locator("#j_idt87\\:city_items");
    const actualCities = await cityList.locator("li[role='option']:visible") .filter({ hasNotText: 'Select City' }).allTextContents()

     expect((actualCities).sort()).toEqual(citiesBelongedUSA.sort())
         await page.locator("div[role='combobox']").filter({ hasText: 'Select Language' }).click()
          await page.locator("//div//li[text()='English']").click()
     
          await page.locator("div[role='combobox']").filter({ hasText: 'Select Values' }).click()

              const numberList = page.locator("#j_idt87\\:value");
              numberList.click()
    const actualNumbers = await numberList.locator("li[role='option']:visible") .filter({ hasNotText: 'Select Values' }).allTextContents()
    console.log("Numbers in Language :"+actualNumbers)
    await page.locator("//div/ul[@id='j_idt87:value_items']/li[4]").click()


})