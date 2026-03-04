// create abstract class 
// fill() -> implement
// clear()->implement
// locator()-> unimplement
// frame() -> unimplement

import { alertMethods } from "./Interface"

abstract class ElementDriver
{
       title:String ="TestLaps"
fill()
{
    console.log("Fill the Content")
}
clear()
{
    console.log("Clear the content")
}
abstract locator():void
 

abstract frame():void

}

class browserElement extends ElementDriver implements alertMethods
{
    alert(): void {
         console.log("Click alert Window")
    }
    window(): void {
        console.log("Jump into Frame")
    }
    locator(): void {
        console.log("this..",this.title)
        console.log("Locate Web Element")
       
    }
    frame(): void {
        console.log("Jump into the Web Frame")
       
    }

}

class MobileElement extends ElementDriver
{
    locator(): void { 
        console.log("Locate Mobile Element")
        
    }
    frame(): void {
        console.log("Jump into the Mobile Frame")
       
    }
    
}

let w = new browserElement()
console.log(w.title)
w.locator()
w.frame()
let m= new MobileElement()

m.fill()
m.frame()
m.locator()

