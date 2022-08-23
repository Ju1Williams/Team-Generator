class Employee {
    const (employeeName, email, id) {
        this.employeeName = employeeName;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.employeeName;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }
    
}

module.exports = Employee;