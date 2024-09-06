
let inventory = [
    { id: '001', name: 'Laptop', price: 45000, quantity: 5 },
    { id: '002', name: 'Smartphone', price: 25000, quantity: 10 },
    { id: '003', name: 'Tablet', price: 15000, quantity: 7 }
];

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

function displayProducts() {
    inventory.forEach(product => {
        console.log(`${product.name} - ₹${product.price} (${product.quantity})`);
    });
}
function addProduct(id, name, price, quantity) {
    const newProduct = new Product(id, name, price, quantity);
    inventory.push(newProduct);
}

function updateProduct(id, quantity) {
    const product = inventory.find(product => product.id === id);
    if (product) {
        product.quantity = quantity;
    } else {
        console.log(`Product with id ${id} not found.`);
    }
}
function updateProductWithMap(id, quantity) {
    inventory = inventory.map(product => {
        if (product.id === id) {
            return { ...product, quantity: quantity };
        }
        return product;
    });
}

function removeProduct(id) {
    inventory = inventory.filter(product => product.id !== id);
}


displayProducts();


addProduct('004', 'Headphones', 3000, 15);
displayProducts();

updateProduct('002', 20);
displayProducts();

updateProductWithMap('003', 5);
displayProducts();

removeProduct('001');
displayProducts();