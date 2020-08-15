const name = "Ropy";
let age = 25;
age = 28;
console.log(name, age);

function addNum(a, b = 0){
    return a + b;
}
const result = addNum(15);
console.log(result);

// const firstName = "Maruf"
// const lastName = "Ropy"
// const fullName =`${firstName} ${lastName}`;
// console.log(fullName);

// const doubleIt = (num) => num * 2;
// const output = doubleIt(5);
// console.log(output);