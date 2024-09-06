const products = [
  { id: 'p1', name: "Laptop", price: 42000, category: "Electronics" },
  { id: 'p2', name: "Smartphone", price: 18000, category: "Electronics" },
  { id: 'p3', name: "Headphones", price: 1150, category: "Electronics" },
  { id: 'p4', name: "Banana", price: 1.99, category: "Fruit" },
  { id: 'p5', name: "Apple", price: 2.50, category: "Fruits" }
];

function displayProduct(products){
  products.forEach(product=>{
    result=`${product.name} - $${product.price}`
    console.log(result)
  })
  return result
}
const res=displayProduct(products);
console.log(res)




































// const tax=0.10;
// const productWithTax=products.map(product=>{
//   return {...products, 
//     priceWithTax:(products.price*(1+tax)).toFixed(2)};
// });

// const displaywithtax1=(products)=>{
//   products.forEach(product=>{
//     console.log(`${product.name}-$${product.priceWithTax}`);
//   })
// }
// const res1=displaywithtax1(products);
// console.log(res1)

