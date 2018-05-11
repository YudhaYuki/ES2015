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

console.log(question.size);

if(question.has(4)) {
    //question.delete(4);  
    console.log('Answer 4 is here !');  
}

// question.clear();

