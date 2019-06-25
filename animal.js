export class Animal {
  constructor(type, legs){
    this.type = type;
    this.legs = legs;
  }

  makeNoise(sound = 'None') {
    console.log(sound);
  }

  //getter
  get metaData() {
    return `Type: ${this.type}, Legs: ${this.legs}`;
  }

  //reminder that static allows us to create a function
  //in our class where we dont have to create an instance of animal to use it
  static return10() {
    return 10;
  }
}


export class Cat extends Animal {
  //inherit class Animal constructor
  constructor(type, legs, tail){
    super(type, legs);
    this.tail = tail;
  }

  //override method
  makeNoise(sound = "meow") {
    console.log(sound);
  }
}
