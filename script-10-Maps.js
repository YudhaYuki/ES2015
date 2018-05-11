// Maps

const question = new Map();

question.set('question', 'What is the major official name of the latest major JS version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct Answer :D');
question.set(false, 'Wrong, please try again !');

console.log(question.get('question'));

// console.log(question.size);

if(question.has(4)) {
    //question.delete(4);  
    // console.log('Answer 4 is here !');  
}

// question.clear();






// Looping: Map is iterable, which something we can not do with the object

// forEach
    // question.forEach((value, key) => console.log(`This is ${key}, and it's set to ${value}`));

// for OF
    /*
    for (let [key, value] of question.entries()) {
        console.log(`This is ${key}, and it's set to ${value}`);
    }
    */

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    } 
}

const ans = parseInt(prompt('Write the correct answer'));
console.log(question.get(ans === question.get('correct')));


// WHY MAPS Better
/*
    - We can use anything as keys, which opens a lot of possibilities
    - Iterable, making it easy to loop through them and to manipulate data with them
    - it is easy to get the size of the maps using the SIZE property
    - Easily ADD and REMOVE data from the MAP
*/