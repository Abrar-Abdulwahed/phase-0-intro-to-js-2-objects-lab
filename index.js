// Initialized the employee Object using literal syntax
const employee = {
    name: "Abrar",
    streetAddress: "Almasbah",
}


function updateEmployeeWithKeyAndValue(employee, key, value){
    // const newEmployee = {...employee} === const newEmployee = Object.assign({}, employee);
    // newEmployee[key] = value;
    // return newEmployee;

    //refactor the function
    return {
        ...employee,
        [key]: value,
    };
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
