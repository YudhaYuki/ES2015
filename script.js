// LET and CONST

/*
// ES5
var name5 = 'Yudha Yuki';
var age = 23;
name5 = 'Yudha Miller';

console.log(name5);


// ES6
const name6 = 'Yudha Yuki';
let age6 = 23;
name6 = 'Yudha Miller';

console.log(name6);
*/


// FUNCTION

// ES5
function driversLicence5(passedTest) {
    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);