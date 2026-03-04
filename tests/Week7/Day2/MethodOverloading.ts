class methodOverloading
{
    eClick(a:String):void
    eClick(a:String,b:number):void
    eClick(a:String,b:number|undefined,c:number):void


    eClick(a:String,b?:number|undefined,c?:number)
    {
        if(c===4)
        {
            console.log("I am number 4")
        }
        else{
            console.log("I am not number 4")
        }
    }


}
let m = new methodOverloading()
m.eClick("Kala",undefined,4)