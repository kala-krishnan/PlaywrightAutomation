import test,{expect} from "@playwright/test"
test("Handling alert inside frames" ,async({page})=>{

        page.once('dialog',alertType=>{  
        alertType.accept("Kala")
    })
    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_prompt")
    await page.frameLocator("#iframeResult").locator("//button[text()='Try it']").click()

     const helloMessage = await page.frameLocator("#iframeResult").locator("#demo").innerText()
     console.log(helloMessage)
     expect(helloMessage).toEqual("Hello Kala! How are you today?")






})