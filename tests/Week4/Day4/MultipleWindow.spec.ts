
import test from '@playwright/test'


test("Multiple Window Handleing",async({page,context})=>{


    await page.goto("https://www.leafground.com/window.xhtml")


//promise.all[]
//create promise
const [parentPage]=await Promise.all([
    context.waitForEvent('page'),
    //action
    await page.locator("//span[text()='Open Multiple']").click()
])
//[parentPage] =>{p1,ch1,ch2}
const count=parentPage.context().pages()
console.log(count.length)
    
  //Web Table
 //Dashboard
 let dashboard:any
 let webtable:any


for(let i=0;i<count.length;i++){
    
    await count[i].waitForLoadState(); 
    const title= await count[i].title()
    console.log("title"+title)
  
    if(title.includes('Window')){
        //resolve the promise'
        dashboard=count[i]
    }else if(title.includes('Web Table')){
        webtable=count[i]
    }
}


await dashboard.locator('#email').fill("admin@testleaf.com")


await webtable.getByPlaceholder("Search...").fill("Russia")





})