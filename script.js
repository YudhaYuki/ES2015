// ARROW FUNCTION

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(year){
    return 2016 - year;
});

console.log(ages5);



// ES6 with ONE ARGUMENT
/*
const ages6 = years.map(year => 2016 - year);

console.log(ages6);
*/


// ES6 with TWO ARGUMENTS
let ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

console.log(ages6);



// ES6 with More than ONE LINE code
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`;
});

console.log(ages6);
