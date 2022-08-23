class Manager {
    const (managerName, email, id) {
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
    getRole () {
        return Manager;
    }
}

module.exports = Manager;