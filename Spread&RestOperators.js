
const arr = [1,2,3];
const arr2 = [4,5,6]

const arr3 = [...arr, ...arr2]

console.log(arr3)    //OUTPUT  -> [1, 2, 3, 4, 5, 6]


//Rest Operators

function sum (...number){
    return number.reduce((total, current) => total + current);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8 )); // 9, 10, 11, 12, 13... 