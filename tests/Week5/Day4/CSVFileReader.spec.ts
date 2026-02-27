import { parse } from "csv-parse/sync";
import fs from "fs"

import test from "@playwright/test";


const data : any[]=parse(fs.readFileSync("data/ParabankRegister.csv"),//if the relative path is not working give absolute path using path.join
{
     columns:true,
    skipEmptyLines:true
}

)

for(let readData of data)
{
   
    test(`Reading CSV FIle ${readData.TestId}` ,async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")
    await page.locator("//a[text()='Register']").click()
    await page.locator(`//input[@name="customer.firstName"]`).fill(readData.FirstName)
    await page.locator(`//input[@name="customer.lastName"]`).fill(readData.LastName)
    await page.locator(`//input[@name="customer.address.city"]`).fill(readData.City)
    await page.locator(`//input[@name="customer.address.state"]`).fill(readData.State)


})}