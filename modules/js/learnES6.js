var addition = (a, b) => (a + b);

var square = (a) => {
    return a * a;
};

var variable = 88888;

class EmployeeInfo {
    constructor(employeeinfo) {
        this.name = employeeinfo.name;
        this.id = employeeinfo.id
    }
    getName() {
        return this.name;
    }
}

export { addition, square, variable, EmployeeInfo };
