//Import Employee constructor
const Employee = require("./Employee");

// Engineer constructor extends the employee constructor
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    // Neccessary to override employee constructor and change role
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;