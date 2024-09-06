// a
let numbers = [1, 2, 3, 4, 5];

// forEach()
numbers.forEach(function(number) {
    console.log(number);
});

numbers.forEach(function(number) {
    console.log(number * 2);
});

//  map()
let squaredNumbers = numbers.map(function(number) {
    return number * number;
});
console.log(squaredNumbers);

squaredNumbers = numbers.map(number => number * number);
console.log(squaredNumbers);

// filter()
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);

evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);
