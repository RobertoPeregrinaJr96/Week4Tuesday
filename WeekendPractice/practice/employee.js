// const Manager = require("./manager")// you cant call it its parents mod


class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name
        this.salary = salary
        this.title = title
        this.manager = manager
        if (manager) manager.addEmployee(this) // if their is a new manager class then we add it to this context
    }
    calculateBonus(percent) {
        this.salary = this.salary * percent
        return this.salary
    }
}

module.exports = Employee
