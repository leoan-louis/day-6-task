// 3) Write a “person” class to hold all the details


class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Example :
var leoan = new Person("leoan", "lee", 23, "leoan@example.com");

console.log(leoan.getFullName()); // Output:leoan 
console.log(leoan.age); // Output: 23
console.log(leoan.email); // Output: leoan@example.co
