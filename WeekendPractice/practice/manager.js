const Employee = require('./employee');


class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager)
        this.employees = []
        this.totalSalary = 0
    }
    addEmployee(employee) {
        this.employees.push(employee)
    }
    calculateBonus = (percent) => {
        this.employees.forEach(num => {
        console.log(num)
            // this.totalSalary += num * this.calculateBonus(percent)
        })
        // let managerBonus = this.salary * percent
        // this.totalSalary += managerBonus + bonus
        // return this.totalSalary
    }
}



// const splinter = new Manager('Splinter', 100000, 'Sensei');
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', leo);
const leo = new Manager('Leonardo', 90000, 'Ninja');

console.log(leo.calculateBonus(0.05))










module.exports = Manager
