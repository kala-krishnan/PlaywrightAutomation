import test, { expect } from "@playwright/test"
let token:any
let instanceURL:any
let lead_id:any
test("Salesforce API testing Token Generation ",async({request}) =>
    {
 const response = await request.post("https://login.salesforce.com/services/oauth2/token",{
    headers:{
        "Content-Type" :"application/x-www-form-urlencoded"
    },

    })
    const res = await response.json()
    console.log(response.status())
    console.log(res.access_token)
    token = res.access_token
    instanceURL=res.instance_url
})
test("Salesforce API Post Request to create lead",async({request})=>{
     const response = await request.post(`${instanceURL}/services/data/v66.0/sobjects/Lead`,{
    headers:{
        "Content-Type" :"application/json",
        "Authorization" :`Bearer ${token}`
    },
    data:{
        "firstname":"Chetan",
        "lastname":"Sai",
        "Company":"TechMahendra"
    }

})
   const res = await response.json()
    console.log(response.status())
    lead_id=res.id
})
test("Salesforce API get Request to get leads",async({request})=>{
     const response = await request.get(`${instanceURL}/services/data/v66.0/sobjects/Lead/${lead_id}`,{
    headers:{
        "Content-Type" :"application/json",
        "Authorization" :`Bearer ${token}`
    }


})
   const res = await response.json()
    console.log(response.status())
})
test("Salesforce API get Request to update leads",async({request})=>{
     const response = await request.patch(`${instanceURL}/services/data/v66.0/sobjects/Lead/${lead_id}`,{
    headers:{
        "Content-Type" :"application/json",
        "Authorization" :`Bearer ${token}`
    },
   
    data:{
        "firstname":"Kabir",
        "lastname":"Sai",
        "Company":"TechMahendra"
    }

})
 
    console.log(response.status())
})
test("Salesforce API get Request to delete leads",async({request})=>{
     const response = await request.delete(`${instanceURL}/services/data/v66.0/sobjects/Lead/${lead_id}`,{
    headers:{
        "Content-Type" :"application/json",
        "Authorization" :`Bearer ${token}`
    }


})
    console.log(response.status())
})