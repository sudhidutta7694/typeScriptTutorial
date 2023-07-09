interface Animal {
    name: string;
    makeSound(): void;
}

class Dog implements Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound(): void {
        console.log("Woof!");
    }
}

class Cat extends Dog {
    makeSound(): void {
        console.log("Meow!");
    }
}

const dog: Animal = new Dog("Buddy");
const cat: Animal = new Cat("Whiskers");

dog.makeSound(); // Output: Woof!
cat.makeSound(); // Output: Meow!

export {};