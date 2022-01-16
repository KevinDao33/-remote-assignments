// Assignment 1: Function and Array
// Complete the function below to find the max number of the passing array of numbers.
// Reminder: you cannot use built-in Math.max() or sort() to complete this assignment.
// function max(numbers){
// // your code here, for-loop method preferred
// }
// max([1, 2, 4, 5]); // result to 5
// max([5, 2, 7, 1, 6]); // result to 7

//create fuction mac(arr)
function max(arr){
    let biggest = -1000;
    for(let i=0; i<arr.length; i++){
        if(arr[i] > biggest){
            biggest = arr[i];
        }
    }
    console.log(biggest);
}

max([1, 3, 4, 2, 50, 12, -99]); // 50


// Assignment 2: Object
// In JavaScript, there are many different sets of syntax for creating objects. In the code below, function parameters are encapsulated into an object, try using at least two ways to create a proper object as a parameter of the calculate function.

// create onject args1
let args1 = {
    n1 : 10,
    n2 : 20,
    op : "+"
}

//create object args2
class Args2 {
    constructor(n1, n2, op){
        this.n1 = n1,
        this.n2 = n2,
        this.op = op
    }
}

const args2 = new Args2(10, 20, "-");

//create function calculate
function calculate(args){
    let result;
    if(args.op === "+"){
        result = args.n1 + args.n2;
        console.log(result);
    } else if(args.op === "-"){
        result = args.n1 - args.n2;
        console.log(result);
    } else {
        console.log(`Not Supported!`)
    }
}

calculate(args1); //30
calculate(args2); //-10



// Assignment 3: Function, Array, and Object
// Complete the function below to calculate the average price of all the products.
//create avg function
function avg(data){
    let totalPrice = 0;
    for(let i=0; i<data.products.length; i++){
        totalPrice += data.products[i].price;
    }
        let avgPrice = totalPrice / data.size;
        console.log(avgPrice);
}

avg({
    size : 3,
    products: [
        {
            name : "Product 1",
            price : 100
        },
        {
            name : "Product 2",
            price : 700
        },
        {
            name : "Product 3",
            price : 250
        }
    ]
}) // average price : $350



// Assignment 5: Algorithm Practice (Advanced Optional)
// Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
//create twoSum function
function twoSum(nums, target){
    for(let i=0; i<nums.length; i++){
        for(let j=nums.length; j>0; j--){
            let addResult = nums[i] + nums[j];
            if(addResult == target){
                let twoNums = [i, j];
                console.log(twoNums);
            }
        }
    }
}

let nums = [2, 7, 11, 15]
twoSum(nums, 9); //[0, 1] (nums[0]+nums[1]==target)