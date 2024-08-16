
function doubleNumber(num) {
    return num * 2;
}

function squareNumber(num) {
    return num * num;
}

function incrementNumber(num) {
    return num + 1;
}

function performOperation(num, operation) {
    return operation(num);
}

function handleOperation(operation) {
    const inputElement = document.getElementById('userInput');
    const resultElement = document.getElementById('result');
    const num = parseFloat(inputElement.value);

    if (isNaN(num)) {
        resultElement.textContent = "Please enter a valid number!";
        return;
    }

    const result = performOperation(num, operation);
    resultElement.textContent = `Result: ${result}`;
}

document.getElementById('doubleBtn').addEventListener('click', function() {
    handleOperation(doubleNumber);
});

document.getElementById('squareBtn').addEventListener('click', function() {
    handleOperation(squareNumber);
});

document.getElementById('incrementBtn').addEventListener('click', function() {
    handleOperation(incrementNumber);
});
