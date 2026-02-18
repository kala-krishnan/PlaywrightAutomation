import test,{expect} from "@playwright/test"
test("Handling alert using page.once" ,async({page})=>{
    page.on('dialog',alertType=>{
        const type=alertType.type()
        console.log(type)
        const message = alertType.message()
        console.log(message)
    })
await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
page.waitForLoadState('domcontentloaded')
await page.locator("//button[text()='Try it']").click()
const getMessage = await page.locator("#demo").innerText()
console.log("Try it "+getMessage)



})