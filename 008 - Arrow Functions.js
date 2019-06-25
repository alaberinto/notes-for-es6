function add(...nums) {
    //adds all numbers in the array
    // let total = nums.reduce(function(x,y){
    //   return x+y;
    // });

    let total = nums.reduce((x,y) => x + y);

    //does not have its own instance of "this"
    console.log(total);

}

add(4, 5, 7, 8, 12)

//eliminate some of the unnecessary boilerplate
//callback functions
