const Employee = require('./employee');

class Intern extends Employee {
    constructor (name, id,email , fax) {
        super(name, id, email, fax);
        this.fax = fax;
    } 

    getGithub() {
        return this.fax;
    }

    getRole() {
        return 'Engineer'
    }
      
}

module.exports = Intern;

//Intern