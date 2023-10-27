class Person {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getEmail() {
        return this.email;
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setEmail(email) {
        this.email = email;
    }
}


let person1 = new Person('Balu Sami', 100, 'balu@balumail.com');

console.log(person1.getName()); // Output: Balu Sami
console.log(person1.getAge());  // Output: 100
console.log(person1.getEmail()); // Output: balu@balumail.com

person1.setAge(31);
person1.setEmail('jr.balu@newemail.com');

console.log(person1.getAge());  // Output: 31
console.log(person1.getEmail()); // Output: jr.balu@newemail.com
