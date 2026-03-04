import { customFixture } from "./CustomFixture"



//test("",async{page})
customFixture("Click Accounts",async({salesForceLogin})=>{



    const title= await salesForceLogin.title()
    console.log(title)


await salesForceLogin.locator("//span[text()='Accounts']").first().click()




})