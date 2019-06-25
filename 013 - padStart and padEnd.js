let example = 'Dylan';

console.log(example.padStart(10, 'a'));
console.log(example.padEnd(10, 'a'));

//depends on how long example variable is
//if it has 10 characters, then this method will not work

let example = 'YouTube.com/CodingTutorials360';

// console.log(example.padStart(100));
// console.log(example.padEnd(1));

//what happens when just numbers are entered?
// add blank spaces?
//padEnd(1) will not do anything because of the length of string is bigger
