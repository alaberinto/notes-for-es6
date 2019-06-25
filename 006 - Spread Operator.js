let example1 = [1,2,3,4,5,6];

console.log(example1);

let example2 = [...example1];

//unwraps values of example1 into example2
//instantiates a new array and not referencing it
console.log(example2);

//won't show true
//not passed by value.
example2.push(true);
console.log(example1);

//Example of use
let example1 = {
    firstName: 'Dylan'
};

// let example2 = {
// firstName: 'N/A'
//     ...example1
// }

// example2 = {firstName: 'Dylan'}
