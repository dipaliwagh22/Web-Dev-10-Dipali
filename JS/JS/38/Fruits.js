// arr
let fruits = ["apple", "banana", "cherry", "date"];

// iterate using foreach
fruits.forEach(function(fruit) {
    console.log(fruit.toUpperCase());
});

fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

// Calculate total characters using foreach
let totalCharacters = 0;

fruits.forEach(function(fruit) {
    totalCharacters += fruit.length;
});
console.log(totalCharacters);

//map
let reversedFruits = fruits.map(function(fruit) {
    return fruit.split('').reverse().join('');
});
console.log(reversedFruits);

reversedFruits = fruits.map(fruit => fruit.split('').reverse().join(''));
console.log(reversedFruits);

// iterarte and create new arr using filter
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(longFruits);

longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits);

// create new arr using filter() and map()
let aFruitsUpper = fruits.filter(function(fruit) {
    return fruit.includes('a');
}).map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(aFruitsUpper);
