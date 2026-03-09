import { LoginPage } from "./TL_LoginPage";

export class WelcomePage extends LoginPage
{
    async clickCRMButton()
    {
         await this.page.locator("//a[contains(text(),'CRM/SFA')]").click()
    }
    async clicklogOutButton()
    {
        await this.page.locator("#logout").click()
    }
}