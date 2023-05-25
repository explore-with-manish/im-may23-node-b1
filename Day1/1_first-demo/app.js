// Global Objects
// var i = 10;
// console.log(i);
// console.log(typeof i);

// console.log(process);
// console.log(process.cwd());
// console.log(process.env);
// console.log(__dirname);
// console.log(__filename);

// var count = 0;

// setInterval(()=>{
//     console.log(++count);
// }, 1000);

// console.log(module);

// ---------------------------------------------

// let a =10;
// console.log(`a is ${a}`);
// console.log(`Type of a is ${typeof a}`);

// function add(x = 0, y = 0) {
//     return x + y;
// }

// console.log(add(2, 3));
// console.log(add(2));
// console.log(add());

// const Employee = (function () {
//     function Employee(name) {
//         this._name = name;
//     }

//     Employee.prototype.getName = function () {
//         return this._name;
//     }

//     Employee.prototype.setName = function (value) {
//         this._name = value;
//     }

//     return Employee;
// })();

class Employee {
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(value) {
        this._name = value;
    }
}

let e1 = new Employee("Manish");
console.log(e1.getName());
e1.setName("Ramakant");
console.log(e1.getName());
