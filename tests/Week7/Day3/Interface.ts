 export interface alertMethods
{
    alert():void
    window():void
}
interface frameMethods
{
    jumpinto():void
    jumpOut():void
}
class loginPage implements alertMethods,frameMethods
{
    jumpinto(): void {
        
    }
    jumpOut(): void {
        throw new Error("Method not implemented.")
    }
    alert()
    {
        console.log("Click OK in alert window")
    }
    window()
    {
        console.log("Close the window")
    }
}
let l = new loginPage()
l.alert()
l.window()