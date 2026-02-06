import test from "@playwright/test"

test("Finding Element using playwright locator",async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.getByRole('textbox',{name:'username'}).fill("Demosalesmanager")
    await page.getByLabel('Password').fill("crmsfa")

})