import { WelcomePage } from "./TL_WelcomePage";

export class homePage extends WelcomePage
{
async clickLead()
{
     await this.page.locator("//a[text()='Leads']").click()
}
async clickAccount()
{
 await this.page.locator("//a[text()='Accounts']").click()
}

}