if (false) {
    var example = 5;
}

//this will get a null value
console.log(example)

/*
variable hoisting
variable can be declared after it has been used
In other words, a variable can be used before it has been declared

In this example, it goes to the function scope level

var example;

if (false) {
    example = 5;
}

console.log(example)

*/

if (false) {
    let example = 5;
}

//this will cause an error
//example is undefined because of block scope level
//i.e interpreted as it is coded!!!
console.log(example)

const example1 = 5;

//can't set
//example1 = 10;
console.log(example1)

const example2 = [];
//fine; can also push multiple times!
example2.push(5)
//not fine
//example = 3;
//cannot change objects

const example3 = {};
example.firstName = 'Dylan';
console.log(example3);
