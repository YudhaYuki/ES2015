// ARRAYS

const boxes = document.querySelectorAll('.box');

// ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
})
*/


// ES6
/*
var boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

// ES6 even shorter
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');