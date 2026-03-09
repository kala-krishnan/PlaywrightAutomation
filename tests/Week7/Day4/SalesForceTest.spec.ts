import {test} from "@playwright/test"
import { LeadPage } from "../Pages/TL_LeadPage"

test("Creating Lead  " ,async({page})=>{
    let createLeadObj = new LeadPage(page)
    await createLeadObj.loadUrl()
        await page.waitForTimeout(2000) 
     await createLeadObj.enterUserName()
     await createLeadObj.enterPassword()
     await createLeadObj.clickLogin()
     await createLeadObj.clickCRMButton()
     await createLeadObj.clickLead()
     await createLeadObj.clickCreateLead()
     await createLeadObj.enterCompanyName()
     await createLeadObj.enterFirstName()
     await createLeadObj.enterLastName()
     await createLeadObj.enterPersonalTitle()
     await createLeadObj.enterProfessionalTitle()
     await createLeadObj.enterAnnualRevenue()
     await createLeadObj.enterDepartName()
     await createLeadObj.enterPhoneNumber()
     await createLeadObj.clickLeadSubmitButton()



})