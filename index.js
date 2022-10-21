// Write your solution in this file!
const employee ={ 
    name: "saeed",
    streetAddress: "florya"
}
const updateEmployeeWithKeyAndValue = (employee, key, value ) => {
 let newEmployee = {...employee}; 
 newEmployee[key] = value;
 return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    let newEmployee = {...employee};
    delete newEmployee[key];
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}