const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);
exampleSet.add(5).add(17); //this one is ignored

console.log(exampleSet.has(5)); //will return boolean of true

console.log(exampleSet.delete(5)); //will return boolean of true
//deleting will delete the one value and will count against ALL

//looks for unique values only so size would be 2
console.log(exampleSet.size);

exampleSet.clear();
console.log(exampleSet.size);

//a set is iterable so you can use ForEach and ForOf
