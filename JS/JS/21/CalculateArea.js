function calculateArea(width, height) {
    return width * height;
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    if(!isNaN(width) && !isNaN(height)){
        const area=calculateArea(width,height);
        document.getElementById('areaDisplay').textContent=area;
    }else{
        document.getElementById('areaDisplay').textContent='please enter a valid number'
    }
});



// //a. calculate area function
// function calculateArea(width,height){
//     return width*height;
// }
// let area=calculateArea(5,10);
// console.log(area);

// //b
// function calculateAreaWithDefaults(width=1,height=1){
//     return width*height;
// } 
// let defaultarea=calculateAreaWithDefaults();
// console.log(defaultarea);
// console.log(calculateAreaWithDefaults(5,10));

// //c function expression
// const calculateAreaFunction=function(width,height){
//     return width*height
// }
// console.log(calculateAreaFunction(5,10))

// // d Arrow function
// const calculateArea1=(width,height)=>{
//     return width*height;
// }
// console.log(calculateArea1(5,10))