class FillData
{
    fill(text:String):void
    fill(text:String,locator:String):void

    fill(text:String,locator?:String):void
    {
        console.log("The text is "+text)
        if(locator === "inputTag")
        {
            console.log("Find the locator")
        }
        else
        {
            console.log("Not yet find the locator")
        }
    }
}
let f = new FillData()
f.fill("TestLeaf" ,"inputTag")

