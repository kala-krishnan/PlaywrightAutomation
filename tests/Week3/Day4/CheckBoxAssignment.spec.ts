import test,{expect} from "@playwright/test"
test("Asserting Select Dropdown " ,async({page})=>{


    await page.goto("https://leafground.com/checkbox.xhtml")
//await page.getByRole("checkbox", {name:'Basic'}).check()
await page
  .locator("text=Basic")
  .locator("..")
  .locator(".ui-chkbox-box")
  .click()
  //  basicCheck.check()
await expect(page.getByLabel('Basic')).toBeChecked();

// await page
// .locator("text=Ajax")
// .locator("..")
// .locator(".ui-chkbox-label")
// .click()
await page.locator("//span[text()='Ajax']").click()
await expect(page.getByLabel('Ajax')).toBeChecked();




await page
.locator("h5:has-text('Toggle Switch')")
.locator("..")
.locator(".ui-toggleswitch-slider")
.click()
const alertMessage = await page.getByRole("alert").locator(".ui-growl-title").innerText()
 expect(alertMessage).toEqual("Checked")




 // const courses = await coursesList.locator("label").allTextContents()
// console.log("courses" +courses)
let checkCourses = ['Java','Javascript']
for(const course of checkCourses)
{
   const coursesList = await page.locator("//div[@class='grid formgrid']//table")

await coursesList
      .locator("//input[@value="+course+"]")
      .click();
}

await page
.locator("h5:has-text('Tri State Checkbox')")

.click()

})