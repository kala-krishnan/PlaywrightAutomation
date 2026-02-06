import test from "@playwright/test"
test("Launching SalesForce Website " ,async({page})=>{


    await page.goto("https://leafground.com/select.xhtml")
    
})