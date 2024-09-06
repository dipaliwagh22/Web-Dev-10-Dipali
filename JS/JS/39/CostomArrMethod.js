//a forEachArray Function:
//Define a function called forEachArray that takes two arguments: an array and a callback function.
//Replicate the behavior of JavaScript's built-in forEach function.
//The forEachArray function should apply the callback function to each element of the array.


// forEachArray Function
function forEachArray(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i], i, array);
    }
}

function mapArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

function filterArray(array, callback) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
