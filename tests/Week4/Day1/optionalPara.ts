function printingValues(empName:String,empRollNO:number,empPhone:number,options?:{empAddress?:String,empState?:String})
{
    console.log("name : " +empName+"empRollNO : "+empRollNO+ "empPhone :" +empPhone+ "Address : "+options?.empAddress
        + "State : "+options?.empState
    )
}
printingValues("Kala",14,909090909,{empAddress:"Vilathi" ,empState:"TamilNadu"})
