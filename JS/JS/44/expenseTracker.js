
let expenses = [];
class Expense {
    constructor(id, name, amount, date) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.date = date;
    }
}
function displayExpenses() {
    expenses.forEach(expense => {
        console.log(`${expense.name} - ${expense.amount} (${expense.date})`);
    });
}
function addExpense(id, name, amount, date) {
    const newExpense = new Expense(id, name, amount, date);
    expenses.push(newExpense);
}
function updateExpense(id, amount) {
    const expense = expenses.find(exp => exp.id === id);
    if (expense) {
        expense.amount = amount;
    }
}
function updateExpenseWithMap(id, amount) {
    expenses = expenses.map(exp => 
        exp.id === id ? { ...exp, amount } : exp
    );
}
function removeExpense(id) {
    expenses = expenses.filter(exp => exp.id !== id);
}


addExpense('1', 'Lunch', 15.5, '2024-09-01');
addExpense('2', 'Coffee', 5.0, '2024-09-02');
displayExpenses();

updateExpense('1', 20.0);
displayExpenses();

updateExpenseWithMap('2', 6.0);
displayExpenses();

removeExpense('1');
displayExpenses();