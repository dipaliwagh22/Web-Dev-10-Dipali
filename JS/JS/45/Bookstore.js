// a
let inventory = [
    { id: 1, title: "wings of fire", author: "Abdul kalam", price: 10.99, quantity: 4 },
    { id: 2, title: "sudhaMurthy", author: "abcd", price: 8.99, quantity: 6 },
    { id: 3, title: "Power of subconscious mind", author: "joseph murphy", price: 12.99, quantity: 5 },
    { id: 4, title: "BhagwatGeeta", author: "shrikrishna", price: 9.99, quantity: 3 }
];
// b
class Book {
    constructor(id, title, author, price, quantity) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}
// c
function displayBooks() {
    inventory.forEach(book => {
        console.log(`${book.title} - ${book.author} ($${book.price})`);
    });
}
// d
function addBook(id, title, author, price, quantity) {
    const newBook = new Book(id, title, author, price, quantity);
    inventory.push(newBook);
}
// e
function updateBook(id, quantity) {
    const book = inventory.find(book => book.id === id);
    if (book) {
        book.quantity = quantity;
    } else {
        console.log(`Book with ID ${id} not found.`);
    }
}
function updateBookWithMap(id, quantity) {
    inventory = inventory.map(book => {
        if (book.id === id) {
            return { ...book, quantity: quantity };
        }
        return book;
    });
}
// f
function removeBook(id) {
    inventory = inventory.filter(book => book.id !== id);
}
displayBooks();

addBook(5, "The Catcher in the Rye", "J.D. Salinger", 11.99, 7);

updateBook(2, 10);

updateBookWithMap(3, 2);

removeBook(4);

displayBooks();
