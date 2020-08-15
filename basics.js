const name = "Ropy";
let age = 25;
age = 28;
//console.log(name, age);

function addNum(a, b = 0){
    return a + b;
}
const result = addNum(15);
//console.log(result);

const firstName = "Maruf"
const lastName = "Ropy"
const fullName =`${firstName} ${lastName}`;
//console.log(fullName);

const doubleIt = (num) => num * 2;
const output = doubleIt(5);
//console.log(output);

const arr1 = [15, 20];
const arr2 = [25, 30];
const arr3 = [...arr1, ...arr2];
//console.log(arr3);

const num1 = 25;
const num2 = 50;
const num3 = 35;
const maxNum = Math.max(num1, num2, num3);
//console.log(maxNum);

numArr = [25, 50, 35];
const maxNumArr = Math.max(...numArr);
//console.log(maxNumArr);

class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Scholastica";
    }
}
const student1 = new Student(1, "Maruf");
const student2 = new Student(2, "Mahzabin");
console.log(student1, student2);