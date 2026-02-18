
  import {test,expect} from "@playwright/test"

test.describe('Smoke testing',()=>{

//serial will run sequentially but it stop execution if any test fail and retry will execute all the test from beginning not only the failed testcase and it stops after first fails
    test.describe.configure({mode:'serial',retries:1})
    test("Test skip with info",async({page})=>{
      test.info().annotations.push({type:'smoke',description:'Check the Naukri upload'},
            {type:'Author',description:'Kala'})
        await page.goto("https://www.naukri.com/registration/createAccount")
        await page.locator(`//h2[text()="I'm experienced"]`).click()
        await page.locator("#resumeUpload").first().setInputFiles("Data/PW-W4-Alert-Frame.pdf")
        await page.waitForTimeout(5000)
        })
        test("Assertion ",async({page})=>{
        
        await page.goto("https://www.leafground.com/input.xhtml")
   
        await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
        console.log("Disabled field assertion passed")
        let titleValue='Input components'
        let expectedTitle=await page.title()
        expect(expectedTitle).toEqual(titleValue)
        console.log("Title assertion passed")     
        })

test("Handling frame using FrameLocator",async({page})=>{
 await page.goto("https://leafground.com/frame.xhtml")
 page.frameLocator("(//iframe)[1]").locator("#Click").click()
page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()

})
})

