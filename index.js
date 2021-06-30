// Write your solution in this file!
let employee={
    name:'Chelsea',
    streetAddress: '1 Betty Lane'
}

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const newObject={...employee}
    newObject[key]=value
    return newObject
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign(employee,({[key]:value}))
}

function deleteFromEmployeeByKey(employee, key) {
    const employeeTwo=Object.assign({},employee)
    delete employeeTwo[key]
    return employeeTwo
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}