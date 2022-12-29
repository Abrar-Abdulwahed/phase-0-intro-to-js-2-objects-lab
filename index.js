// Initialized the employee Object using literal syntax
const employee = {
    name: "Abrar",
    streetAddress: "Almashbah",
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}
