class Engineer {
    constructor(name, empId, email, github) {
        this.name = name;
        this.empId = empId;
        this.email = email;
        this.github = github;
    }

    getRole(){ return "Engineer"};
    
}

module.exports = Engineer