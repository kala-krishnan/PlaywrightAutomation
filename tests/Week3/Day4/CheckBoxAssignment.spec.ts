import test,{expect} from "@playwright/test"
test("Check Box and multi select" ,async({page})=>{


    await page.goto("https://leafground.com/checkbox.xhtml")


await page
  .locator("//span[text()='Basic']").click()

await expect(page.getByLabel('Basic')).toBeChecked();

// await page
// .locator("text=Ajax")
// .locator("..")
// .locator(".ui-chkbox-label")
// .click()
await page.locator("//span[text()='Ajax']").click()
await expect(page.getByLabel('Ajax')).toBeChecked();

//  let checkCourses = ['Java','Javascript']
// for(const course of checkCourses)
//  {
// await page.locator("//label[text()="+course+"]").click()
// //await page.getByLabel(`$`)
 //}
 await page.locator("//label[text()='Java']").click()
 await page.locator("//label[text()='Javascript']").click()
await page
.locator("//div[@id='j_idt87:ajaxTriState']").click()
const alertMessage = await page.getByRole("alert").locator(".ui-growl-title").innerText()
console.log(alertMessage)

await page
.locator("h5:has-text('Toggle Switch')")
.locator("..")
.locator(".ui-toggleswitch-slider")
.click()

 expect(alertMessage).toEqual("Checked")



await expect(page.getByLabel("Disabled")).toBeDisabled()

await page.locator("//ul[@data-label='Cities']").click()

await page.locator("//li[@data-item-value='Miami']").click()

await page.locator("//li[@data-item-value='Paris']").click()

})