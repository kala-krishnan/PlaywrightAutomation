import test from "@playwright/test"

test("test without Annotation " ,async({page})=>{
    //await page.goto("https://www.google.com")

    await page.goto("https://leaftaps.com/opentaps/control/main")
   await page.locator("#username").fill("DemoSalesManager")
   await page.locator("#password").fill("crmsfa")
   await page.locator(".decorativeSubmit").click()
   await page.locator(`text='CRM/SFA'`).click
}

)

//gave test.fail() but excution is passed
test.fail("Test FAil",async({page})=>{
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(`//h2[text()="I'm experienced"]`).click()
    await page.locator("#resumeUpload").first().setInputFiles("Data/PW-W4-Alert-Frame.pdf")
    await page.waitForTimeout(5000)
    })


test.fixme("Test fixme with slow",async({page})=>{
    test.slow()
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(`//h2[text()="I'm experienced"]`).click()
    await page.locator("#resumeUploa").first().setInputFiles("Data/PW-W4-Alert-Frame.pdf")
    await page.waitForTimeout(5000)
    })
    
 //test skip with test slow(not excuted it skipped)   
test.skip("Test skip",async({page})=>{
    test.slow()
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(`//h2[text()="I'm experienced"]`).click()
    await page.locator("#resumeUpload").first().setInputFiles("Data/PW-W4-Alert-Frame.pdf")
    await page.waitForTimeout(5000)
    })

//multiple test only in a file with test info

test.only("Test skip with info",async({page})=>{
  test.info().annotations.push({type:'smoke',description:'Check the Naukri upload'},
        {type:'Author',description:'Kala'})
    await page.goto("https://www.naukri.com/registration/createAccount")
    await page.locator(`//h2[text()="I'm experienced"]`).click()
    await page.locator("#resumeUpload").first().setInputFiles("Data/PW-W4-Alert-Frame.pdf")
    await page.waitForTimeout(5000)
    })