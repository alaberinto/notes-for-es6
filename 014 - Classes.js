//makes JS more OO
import { Animal, Cat } from './animal.js';

// let cat = new Animal();
let cat = new Animal('Cat', 4);

cat.legs = 3;
cat.makeNoise('Meow');
console.log(cat.legs)

//don't have to instantiate class to use it
console.log(Animal.return10());

console.log(cat.metaData)

let newcat = new Cat('Cat', 4);
newcat.makeNoise();

console.log(newcat.metaData);
