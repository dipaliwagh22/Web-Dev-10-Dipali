//calculate age
let people = [
    { name: "Dipali", age: 21 },
    { name: "saryu", age: 20 },
    { name: "sara", age: 22 },
    { name: "ritika", age: 19 }
];

//  Using forEach
function calculateAverageAge(people) {
    let totalAge = 0;
    people.forEach(function(person) {
        totalAge += person.age;
    });
    return totalAge / people.length;
}

// functn cll
let averageAge = calculateAverageAge(people);
console.log("Average Age:", averageAge);

