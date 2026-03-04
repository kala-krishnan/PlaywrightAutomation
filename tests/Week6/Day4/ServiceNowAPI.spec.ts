import test, { expect } from "@playwright/test"
const username = "admin"
const password = "slBB0^k9l^YU"
const login= `${username}:${password}`
//const value=btoa(login)
let sys_Id:any

test("ServiceNowAPI testing POST Request ",async({request}) =>
    {
 const response = await request.post("https://dev362368.service-now.com/api/now/table/incident",
{
    headers:{
        "Content-Type" : "application/json",
       // "Authorization" : `Basic ${value}`    
    },
    data:{
        "short_description": "Playwright with API"
    }
}



 );
const res = await response.json()
console.log(res)
sys_Id=await res.result.sys_id
console.log(sys_Id)
expect(response.status()).toEqual(201)
})

test("ServiceNowAPI testing  GET Request",async({request}) =>
    {
 const response1 = await request.get(`https://dev362368.service-now.com/api/now/table/incident/${sys_Id}`,
{
    headers:{
       
        "Authorization" : `Basic ${value}`    
    }
})
const res = await response1.json()
console.log(res)
expect(response1.status()).toEqual(200)

    })

test("ServiceNowAPI testing  PATCH Request",async({request}) =>
    {
 const response1 = await request.patch(`https://dev362368.service-now.com/api/now/table/incident/${sys_Id}`,
{
    headers:{
       
        "Authorization" : `Basic ${value}`    
    },
     data:{
        "short_description": "Playwright with API using ServiceNow"
    }
})
const res = await response1.json()
console.log(res)
expect(response1.status()).toEqual(200)

    })
test("ServiceNowAPI testing  delete Request",async({request}) =>
    {
 const response1 = await request.delete(`https://dev362368.service-now.com/api/now/table/incident/${sys_Id}`,
{
    headers:{
       
        "Authorization" : `Basic ${value}`    
    }
})
const res = await response1.json()
console.log(res)
expect(response1.status()).toEqual(200)

    })