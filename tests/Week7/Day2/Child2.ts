import { Parentclass } from "./Parent2"



class ChildClass extends Parentclass
{
    createLead()
        {
            console.log("Creating Lead")
        }
    

    }
    let c = new ChildClass()
    c.loadURL()
    c.loginInfo()
    c.createLead()