let word1 = 'Hello';
let word2 = 'World';
let num1 = 1;
let num2 = 3;

// BAD PRACTICE: const sentence = word1 + ' ' + word2;
// BEST PRACTICE
const sentence = `${word1} ${word2}`;
console.log(sentence);
const sum = `${num1 + num2}`;

//How to display Hello World on two lines.
const example = word1 + "\n" + word2;
document.getElementById('example').innerText = example;

let better = `${word1}
${word2}
`;
