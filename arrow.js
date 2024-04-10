// function doubleIt(num){
//     return num*2;
// }


// const doubleIt = function(num){         
//     return num*2;
// }

//arrow function
const doubleIt = num => num*2;    // one parameter
const add = (x,y) => x+y;   // more than one parameter
const give5 = () => 5;   //without parameter

const doMath = (x,y) => {          //multi line
    const sum = x+y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}

// const result = doubleIt(5);
// console.log(result);

const result = doMath(15,5);
console.log(result);