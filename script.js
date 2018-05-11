// ARRAYS

const boxes = document.querySelectorAll('.box');

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
})



// ES6

var boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');


// ES6 even shorter
// Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');






// ES5 - ARRAY - LOOP
/*
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
        // break;
    }

    boxesArr5[i].textContent = 'I changed to blue !';
}
*/




// ES6 - ARRAY - LOOP
/*
for (const cur of boxesArr6) {
    
    if (cur.className === 'box blue') {
        continue;
    }
    
    cur.textContent = 'I changed to blue !';
}
*/


// ES6 - ARRAY - LOOP - SHORTEN

for (const cur of boxesArr6) {
    
    if (cur.className.includes('blue')) {
        continue;
    }
    
    cur.textContent = 'I changed to blue !';

}