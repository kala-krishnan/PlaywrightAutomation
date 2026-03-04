import { Browser } from "./ParentFile";

class Edge extends Browser
{

    browserType(): void {
        console.log("I am using edge browser")
    }
    browserVersion(): void {
        console.log("version : 107")
    }
    launchBrowser()
    {
        console.log("I am launching Edge browser")
    }
}
let e = new Edge()
e.browserType()
e.browserVersion()
e.launchBrowser()