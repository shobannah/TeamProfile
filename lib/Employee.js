class Employee {
    constructor(name, empId, email, getName, getId, getEmail) {
        this.name = name;
        this.empId = empId;
        this.email = email;
        this.getName = getName;
        this.getId = getId;
        this.getEmail = getEmail;
    }

    getRole(){ return "Employee"};
    
}

module.exports = Employee