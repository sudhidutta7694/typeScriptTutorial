interface Person {
    name: string;
    age: number;
    greet: () => void; //This can also be written as greet(): void
}

class Employee implements Person {
    name: string;
    age: number;
    position: string;

    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    greet(): void {
        console.log(`Hello, my name is ${this.name} and I work as a ${this.position}.`);
    }
}

const john: Person = new Employee("John", 30, "Software Engineer");
john.greet();

export { }
