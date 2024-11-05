const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
