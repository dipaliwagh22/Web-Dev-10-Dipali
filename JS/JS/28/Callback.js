// const higherOrderFunction=(num)=>{
//     return num;
// }
// const callback=(higherOrderFunction,num)=>{
//     return higherOrderFunction(num)*num
// }
// console.log(callback(higherOrderFunction,3))

//a
const higherOrderFunction = (num, callback) => {
    return callback(num);
}
const callback = (num) => {
    return num * num;
}
console.log(higherOrderFunction(3, callback));


//b
const higherOrderFunction1 = (num, callback) => {
    return callback(num);
}
const callbackFunction=(number)=>{
    console.log(number)
}
console.log(higherOrderFunction1(5,callbackFunction))

//c  call higher order function with function expression
const higherOrderFunction2 = (num, callback) => {
    return callback(num);
};
higherOrderFunction2(10,function(num){ // function expression 
    console.log(num)
});

//d logs the square of the number
const higherOrderFunction3 = (num, callback) => {
    return callback(num);
};
higherOrderFunction3(4,function(num){ // function expression 
    console.log(num*num)
});

//e
// Define newHigherOrderFunction with num1, num2, and callback as parameters
const newHigherOrderFunction = (num1, num2, callback) => {
    return callback(num1, num2);
};

newHigherOrderFunction(3, 7, function(num1, num2) {
    console.log(num1 + num2);
});
