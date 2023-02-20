class Intern {
    constructor(name, empId, email, school) {
        this.name = name;
        this.empId = empId;
        this.email = email;
        this.school = school;
    }

    getRole(){ return "Intern"};
    
}

module.exports = Intern