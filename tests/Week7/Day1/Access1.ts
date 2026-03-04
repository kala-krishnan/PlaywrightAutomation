export class loginPage
{
    url:String | undefined
    title:String ="TestLaps"

    public login()
    {
        console.log("I am Logging into the app")
        console.log("URL is :", this.url )
        console.log("Title is :", this.title )
    }
    private logout()
    {
        console.log("I am Logging Out from the app");
        this.title = "Logged Out"
        console.log("Title is ",this.title)
    }
    constructor(url: String | undefined)
    {
        this.url=url
        
    }
    public accessLogout()
    {
        this.logout()
    }
}
let obj1 = new loginPage("www.testLeaf.com")
obj1.login()
obj1.accessLogout()