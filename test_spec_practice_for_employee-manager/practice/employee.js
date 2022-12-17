

class Employee {
    constructor(name, salary, title, manager = null,) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager
        this.employees = []
        if (manager) manager.addEmployee(this);
    }
    calculateBonus(multiplier) {
        return this.salary * multiplier;
    }
}

// const leo = new Employee('Leonardo', 90000, 'Ninja')
// console.log(leo.name)
// console.log(leo.salary)
// console.log(leo.title)
// console.log(leo.manager)


module.exports = Employee
