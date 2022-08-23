class manager {
    constructor (managerName, email, id) {
        this.managerName = managerName;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.managerName;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }
}

module.exports = manager;