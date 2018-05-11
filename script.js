// Desctructuring

// ES5 - ARRAY
var john = ['John', 26];
// var name = john[0];
// var age = john[1];

// console.log(name);
// console.log(age);


// ES6 - ARRAY
const [name, age] = ['John', 26];
console.log(name);
console.log(age);



// ES6 - Object (Must be same KEY NAME)
const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

// Use different KEYNAME
const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



