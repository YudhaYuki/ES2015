// CLASSES


// ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5('John', 1990, 'teacher');
console.log(john5);



// ES6
class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job; 
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log(`Hi there !`)
    }
}

const john6 = new Person6('John', 1990, 'teacher');
// console.log(john6);

Person6.greeting();

// NOTE:
    /*
    -   Class definition are not hoisted, we neeed to implement the class, and only later in our code we can start using it
    -   We can only add METHODS to classes, but not properties


