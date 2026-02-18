let empDetails : string|boolean|number
empDetails=89
empDetails="Kala"
empDetails=true

console.log(empDetails)

type api1={
    statusCode1:number
}
type api2={
    statusCode2:String
}
type sta =api1&api2

let apiStatus:sta={
    statusCode1:89,
    statusCode2:'OK'
}
console.log(apiStatus)