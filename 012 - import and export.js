//allows for dependency injection
//allows for more oo programming

import { data } from '.example.js';
//if you had two data
//import { data, data2 }
let updatedData = data;

data.push(5);
console.log(updatedData);
