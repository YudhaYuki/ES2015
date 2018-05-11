// ARROW FUNCTION

const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function(year){
    return 2016 - year;
});

console.log(ages5);



// ES6
var ages6 = years.map(year => 2016 - year);

console.log(ages6);