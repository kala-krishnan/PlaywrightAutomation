import {Page} from "@playwright/test"
export class LoginPage 
{
page:Page
constructor(page:Page)
{
    this.page=page
}

     async loadUrl()
     {
        await this.page.goto("http://leaftaps.com/opentaps/control/main")
     }
     async enterUserName()
     {
        
        await this.page.locator("#username").fill("Demosalesmanager")
     }
     async enterPassword()
     {
        await this.page.locator("#password").fill("crmsfa")
     }
     async clickLogin()
     {
        await this.page.locator(".decorativeSubmit").click()
     }
}