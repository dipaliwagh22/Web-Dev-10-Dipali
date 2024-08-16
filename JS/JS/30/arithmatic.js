
function addNumbers(num1, num2) {
    return num1 + num2;
}

function multiplyNumbers(num1, num2) {
    return num1 * num2;
}


function subtractNumbers(num1, num2) {
    return num1 - num2;
}

function divideNumbers(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

function performArithmetic(num1, num2, operation) {
    return operation(num1, num2);
}

function handleOperation(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Please enter valid numbers!";
        return;
    }

    const result = performArithmetic(num1, num2, operation);
    resultElement.textContent = `Result: ${result}`;
}


document.getElementById('addBtn').addEventListener('click', function() {
    handleOperation(addNumbers);
});

document.getElementById('multiplyBtn').addEventListener('click', function() {
    handleOperation(multiplyNumbers);
});

document.getElementById('subtractBtn').addEventListener('click', function() {
    handleOperation(subtractNumbers);
});

document.getElementById('divideBtn').addEventListener('click', function() {
    handleOperation(divideNumbers);
});
