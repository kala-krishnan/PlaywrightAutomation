import { homePage } from "./TL_HomePage";

export class LeadPage extends homePage
{

         async clickCreateLead()
         {
             await this.page.locator("//a[text()='Create Lead']").click()
         }
         async enterCompanyName()
         {
            await  this.page.locator("#createLeadForm_companyName").fill("TestIcon")
         }
         async enterFirstName()
         {
             await  this.page.locator("#createLeadForm_firstName").fill("Kala")
         }
         async enterLastName()
         {
             await  this.page.locator("#createLeadForm_lastName").fill("Krishnan")
         }
         async enterPersonalTitle()
         {
            await  this.page.locator("#createLeadForm_personalTitle").fill("Mrs")
         }
         async enterProfessionalTitle()
         {
             await  this.page.locator("#createLeadForm_generalProfTitle").fill("Company")
         }
         async enterAnnualRevenue()
         {
            await  this.page.locator("#createLeadForm_annualRevenue").fill("1000000")
         }
         async enterDepartName()
         {
              await  this.page.locator("#createLeadForm_departmentName").fill("Software")
         }
         async enterPhoneNumber()
         {
              await  this.page.locator("#createLeadForm_primaryPhoneNumber").fill("8989898989")
         }
         async clickLeadSubmitButton()
         {
                  await this.page.locator("[name='submitButton']").click()
         }

}