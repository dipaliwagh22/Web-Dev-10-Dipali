// //a
function greet(name) {
    return `Hello, ${name}!`;
}

document.getElementById('button').addEventListener('click', function() {
    let name = prompt("Please enter your name:");
    if (name) {
        let result = greet(name);
        document.getElementById('greeting').textContent = result;
    }
});


// //b

function greetDefault(name="Guest"){
    return `Hello,${name}!`
}
document.getElementById('button').addEventListener('click', function() {
    let name = prompt("Please enter your name:");
    if ( name===null || name.trim()==="") {
       name="Guest"
    }
    let result =  greetDefault(name);
    document.getElementById('greeting').textContent = result;
    result.textContent=result;
});



//c function expression
// const greetFunction=function(name) {
//     return `Hello, ${name}!`;
// }
// document.getElementById('button').addEventListener('click', function() {
//     let name = prompt("Please enter your name:");
//     if (name) {
//         let result = greetFunction(name);
//         document.getElementById('greeting').textContent = result;
//     }
// });

//d arrow function
// const greetArrow=(name)=>{
//     return `Hello,${name}!`
// }
// document.getElementById('button').addEventListener('click', function() {
//     let name = prompt("Please enter your name:");
//     if (name) {
//         let result = greetArrow(name);
//         document.getElementById('greeting').textContent = result;
//     }
// });


// //a function declaration
// function greet(name){
//     return `Hello,${name}!`
// }
// let result=greet("Dipali");
// console.log(result)

// //b
// function greetDefault(name="Guest"){
//     return `Hello,${name}!`
// }
// let res=greetDefault();
// console.log(res)

// //c   Fnction expression
// const greetFunction=function(name){
//  return `Hello,${name}!`
// }
// let r=greetFunction("Dipali");
// console.log(r);

// //d Arrow function
// const greetArrow=(name)=>{
//     return `Hello,${name}!`
// }
// let Arrow=greetArrow("Dipali")
// console.log(Arrow);

