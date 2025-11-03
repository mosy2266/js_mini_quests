function sumNums (array) {
    //const init = 0;
    const result = array.reduce((addedValue, current) => addedValue + current);
    console.log(result);
}

sumNums([1,2,3,4,5]);

/*
function doubleNums (num) {
    return num * 2;
}

const initNums = [1,2,3,4,5];
const doubledNumsArray = initNums.map(doubleNums);
console.log(doubledNumsArray);
*/

function doubleNums(nums) {
    return nums.map((num) => num * 2);
}

const initNums = [1,2,3,4,5];
const doubledNumsArray = doubleNums(initNums);
console.log(doubledNumsArray);