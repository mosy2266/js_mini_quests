// #1

function checkEvenOdd(num) {
    if (num % 2 === 0){
        console.log("Even");
    } else {
        console.log("Odd");
    }
}

checkEvenOdd(4);
checkEvenOdd(7);

// #2

let sum = 0;
for (let i=1; i<11; i++){
    sum += i;
}
console.log(sum);

// #3

const arr = [3,6,9,12];
const newArr = arr.map((num) => num * 2);
console.log(arr);
console.log(newArr);

// #4
const jsStr = "JavaScript";
function reverseString(str) {
    let newStr = "";
    for (let i=str.length-1; i>=0; i--){
        newStr+=str[i];
    }
    return newStr;
}

console.log(reverseString(jsStr));

// #5

function greet(){
    console.log("Hello, World!");
}

const sayHello = function() {
    console.log("Hello, World!");
}

const sayHi = () => console.log("Hello, World!");

greet();
sayHello();
sayHi();