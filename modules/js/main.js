import {addition, square, variable, EmployeeInfo} from './learnES6';

console.log("Square of 5: ", square(5));
console.log("Addition of 10 + 10: ", addition(10, 10));

console.log(variable);

var employee = {
    name: 'Jahnavi Patel',
    id: 123456789
}

var e = new EmployeeInfo(employee);

//Ritesh Kumar
console.log("Employee Name: ", e.getName());
