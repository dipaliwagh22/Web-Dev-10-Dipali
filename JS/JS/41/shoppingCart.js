
let cart = [
    { name: "Laptop", price: 42000, quantity: 1 },
    { name: "Smartphone", price: 18000, quantity: 2 },
    { name: "Headphones", price: 1150, quantity: 3 }
];
function calculateTotalprice(cart){
    let totalPrice=0
    cart.forEach(i=>{
     totalPrice+=i.price*i.quantity
    });
    console.log(totalPrice)
    return totalPrice
}
const res=calculateTotalprice(cart)
console.log(res)



