class engineer {
    constructor (engineerName, email, id) {
        this.engineerName = engineerName;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.engineerName;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }
}

module.exports = engineer;