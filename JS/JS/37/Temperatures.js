// a
let temperatures = [-3, 14, 22, 5, -10];

//  forEach()  function expression and arrow function
temperatures.forEach(function(temp) {
    console.log(temp);
});

temperatures.forEach(temp => {
    console.log(temp);
});

temperatures.forEach(function(temp) {
    console.log((temp * 9/5) + 32);
});

temperatures.forEach(temp => {
    console.log((temp * 9/5) + 32);
});

// map()
let temperaturesInFahrenheit = temperatures.map(function(temp) {
    return (temp * 9/5) + 32;
});
console.log(temperaturesInFahrenheit);

temperaturesInFahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
console.log(temperaturesInFahrenheit);

//  filter()
let belowFreezing = temperatures.filter(function(temp) {
    return temp < 0;
});
console.log(belowFreezing);

belowFreezing = temperatures.filter(temp => temp < 0);
console.log(belowFreezing);
