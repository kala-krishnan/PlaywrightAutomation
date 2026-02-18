import test from '@playwright/test'

test("Single Window Handling -Test leaf application ",async({page,context})=>{

await page.goto("https://www.leafground.com/window.xhtml")

//await page.locator("//button/span[text()='Open']").click()
const mainWindow = context.waitForEvent('page')
await page.locator("//button/span[text()='Open']").click()
const childwindow = await mainWindow

await childwindow.locator("#message").fill("Hello Team")

childwindow.close()
await page.locator("//button/span[text()='Open Multiple']").click()



})