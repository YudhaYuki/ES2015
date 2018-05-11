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




//////////////////////////////////////// ARROW FUNCTIONS : lexical 'this' Keyword

// ES5 (Does not SHARE lexical surrounding)
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color ;
            alert(str); 
        });
    }
}
// box5.clickMe();


// ES6 (SHARE lexical surrounding)
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${self.color}`;
            alert(str)});
        }
    }

// box6.clickMe();



// ES6 (SHARE lexical surrounding), Another scenario, I will be error because it will point to GLOBAL WINDOWS
/*
const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            let str = `This is box number ${this.position} and it is ${self.color}`;
            alert(str)});
        }
    }

box66.clickMe();
*/


////////////////////////// Another EXAMPLE

function Person(name) {
    this.name = name;
}


// ES5, we need to add BIND method in order to point THIS in the function to Person not GLOBAL WINDOS
Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);



// ES6
Person.prototype.myFriends6 = function(friends) {
    
    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
};

new Person('Mike').myFriends6(friends);
    
    
    


