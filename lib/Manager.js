class Manager {
    constructor(name, empId, email, phone) {
        this.name = name;
        this.empId = empId;
        this.email = email;
        this.phone = phone;
    }

    getRole(){ return "Manager"};
    
}

module.exports = Manager