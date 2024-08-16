
function areaOfRectangle(length, width) {
    return length * width;
}
function areaOfCircle(radius, _) {
    return Math.PI * Math.pow(radius, 2);
}

function areaOfTriangle(base, height) {
    return 0.5 * base * height;
}

function calculatePaintingCost(dimension1, dimension2, calculateArea) {
    const area = calculateArea(dimension1, dimension2);
    const costPerUnit = 2; 
    const totalCost = area * costPerUnit;
    return totalCost;
}

function handleCalculation(calculateArea) {
    const dimension1 = parseFloat(document.getElementById('dimension1').value);
    const dimension2 = parseFloat(document.getElementById('dimension2').value);
    const resultElement = document.getElementById('result');

    if (isNaN(dimension1)) {
        resultElement.textContent = "Please enter a valid number for the first dimension!";
        return;
    }  
    const totalCost = calculatePaintingCost(dimension1, dimension2 || null, calculateArea);
    resultElement.textContent = `Total Painting Cost: $${totalCost.toFixed(2)}`;
}

document.getElementById('rectangleBtn').addEventListener('click', function() {
    handleCalculation(areaOfRectangle);
});

document.getElementById('circleBtn').addEventListener('click', function() {
    handleCalculation(areaOfCircle);
});

document.getElementById('triangleBtn').addEventListener('click', function() {
    handleCalculation(areaOfTriangle);
});