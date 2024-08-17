class Employee{
    constructor(name,email,age,department,position,salary){
        this.name=name;
        this.email=email;
        this.age=age;
        this.department=department;
        this.position=position;
        this.salary=salary;
    }
    indroduce(){
        return `Hello, I am ${this.name},${this.position}`
    }
    displaySalary(){
        return `salary:$${this.salary}`
    }
}
const newEmployee=new Employee("Dipali","dip@gmail.com",21,"CSE","Software Engineer",90000)
console.log(newEmployee)
const Manager=new Employee("Manu","manu@gmail.com",30,"IT","Manager",40000)
console.log(Manager)

console.log(newEmployee.indroduce())
console.log(newEmployee.displaySalary())

console.log(Manager.indroduce())
console.log(Manager.displaySalary())