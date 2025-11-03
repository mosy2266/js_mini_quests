// #1
const add = (a,b) => a + b;
const sum = add(2,3);
console.log(sum);


// #2
const sumArray = (nums) => {
    let result = 0;
    for (let i=0; i<nums.length; i++){
        result = result + nums[i];
    }
    return result;
}

const total = sumArray([1,2,3,4,5]);
console.log(total);