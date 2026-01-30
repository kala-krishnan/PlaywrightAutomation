import {test, chromium } from "@playwright/test"

test("Launching the URL",async() =>{
const browser = await chromium.launch({channel :'chrome',headless:false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com")


})
