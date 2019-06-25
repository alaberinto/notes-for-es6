//default params do not allow for errors to occur
//can be an empty array [] or filled array
//"if it doesn't exist default to empty array"
function add(numArray = []) {
    let total = 0;
    numArray.forEach((element) => {
      total += element;
    });
    console.log(total);
}

//not calling numArray
add();
