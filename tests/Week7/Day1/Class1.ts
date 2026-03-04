export class loginPage
{
    url:String | undefined
    title:String ="TestLaps"

    login()
    {
        console.log("I am Logging into the app")
        console.log("URL is :", this.url )
        console.log("Title is :", this.title )
    }
    logout()
    {
        console.log("I am Logging Out from the app");
        this.title = "Logged Out"
        console.log("Title is ",this.title)
    }
    constructor(url: String | undefined)
    {
        this.url=url
        
    }
}
let obj1 = new loginPage("www.testLeaf.com")
obj1.login()
obj1.logout()