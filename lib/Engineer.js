const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, email, id, github) {
        super(name, email, id, github);
        this.github = github;
    } 

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
      
}

module.exports = Engineer;