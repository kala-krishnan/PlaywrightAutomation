import { Browser } from "./ParentFile";

class Chrome extends Browser
{

 
    launchBrowser()
    {
        console.log("I am launching Chrome browser")
        super.browserType("Chrome")
        super.browserVersion(127)
    }
}
let c = new Chrome()

c.launchBrowser()
