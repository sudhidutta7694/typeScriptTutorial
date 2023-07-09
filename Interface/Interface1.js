"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }
    Employee.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I work as a ").concat(this.position, "."));
    };
    return Employee;
}());
var john = new Employee("John", 30, "Software Engineer");
john.greet();
