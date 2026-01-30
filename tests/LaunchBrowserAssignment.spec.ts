import test, { chromium, webkit } from "@playwright/test"

test("Launching the URL" , async()=> {
const browser1 = await chromium.launch({channel:'msedge',headless:false})
const browser2 = await webkit.launch({headless:false})

const context1 = await browser1.newContext()
const page1 = await context1.newPage()

const context2 = await browser2.newContext()
const page2 = await context2.newPage()

await page1.goto("https://www.redbus.in")
await page2.goto("https://www.flipkart.com")

console.log("The title of the page is "+await page1.title())
console.log("The title of the page is "+await page2.title())
console.log("The title of the page is "+page1.url())
console.log("The title of the page is "+page2.url())


})