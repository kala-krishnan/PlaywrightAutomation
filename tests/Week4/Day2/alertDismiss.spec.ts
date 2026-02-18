import test,{expect} from "@playwright/test"
test("Handling alert using page.once" ,async({page})=>{

    page.once('dialog',alertType=>{
        const type =alertType.type()
        console.log(type)
        const message = alertType.message()
        console.log(message)
        alertType.accept()
    })

    await page.goto("https://leafground.com/alert.xhtml")
    
    await page.locator("(//span[text()='Show'])[2]").click()

    await page.locator("(//span[text()='Show'])[5]").click()
})
test("Handling alert using page on",async({page})=>{

page.on('dialog',alertType=>{
        const type =alertType.type()
        console.log(type)
        const message = alertType.message()
        console.log(message)
        if(type==='alert')
        {
        alertType.accept()}
        else if(type ==='confirm')
        {
            alertType.accept()
        }
        else if(type==='prompt')
        {
            alertType.accept("Kala")
        }
    })
     await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("(//span[text()='Show'])[2]").click()

    await page.locator("(//span[text()='Show'])[5]").click()
    


})

test.only("Sweet alert handling",async({page})=>{
     await page.goto("https://leafground.com/alert.xhtml")
    await page.locator("//span[text()='Delete']").click()
    await page.locator("//button/span[text()='Yes']").click()



})