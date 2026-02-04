import test from "@playwright/test"
test("Drop Down Selectors " ,async({page})=>{

     await page.goto("https://www.telerik.com/contact")
     await page.selectOption("[name=DropdownListFieldController_0]",{value:'Product questions'})
     await page.selectOption("[name=DynamicListFieldController]",{value:'United States'})
})