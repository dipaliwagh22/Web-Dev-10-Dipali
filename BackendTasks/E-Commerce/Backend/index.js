const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Could not connect to MongoDB", err));

const productSchema = new mongoose.Schema({
    category_name: { type: String, required: true },
    category_products: [
        {
            id: { type: String, required: true },
            title: { type: String, required: true },
            price: { type: String, required: true },
            compare_at_price: { type: String, required: true },
            vendor: { type: String, required: true },
            badge_text: { type: String },
            image: { type: String },
            second_image: { type: String }
        }
    ]
});

const Catalog = mongoose.model('Catalog', productSchema);
app.post('/products/:category', async (req, res) => {
    const { category } = req.params;
    const newProduct = req.body;

    try {
        let catalog = await Catalog.findOne({ category_name: category });
        if (!catalog) {
            catalog = new Catalog({ category_name: category, category_products: [] });
        }
        catalog.category_products.push(newProduct);
        await catalog.save();
        res.status(201).json(catalog);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add product' });
    }
});

app.get('/products/:category', async (req, res) => {
    const { category } = req.params;

    try {
        const catalog = await Catalog.findOne({ category_name: category });
        if (catalog) {
            res.status(200).json(catalog.category_products);
        } else {
            res.status(404).json({ error: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products' });
    }
});

app.put('/products/:category/:productId', async (req, res) => {
    const { category, productId } = req.params;
    const newPrice = req.body.price;
    try {
        const catalog = await Catalog.findOneAndUpdate(
            { category_name: category, "category_products.id": productId },
            { $set: { "category_products.$.price": newPrice } },
            { new: true }
        );

        if (catalog) {
            res.status(200).json({ message: 'Product updated', catalog });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to update product' });
    }
});

app.delete('/products/:category/:productId', async (req, res) => {
    const { category, productId } = req.params;

    try {
        const catalog = await Catalog.findOneAndUpdate(
            { category_name: category },
            { $pull: { category_products: { id: productId } } },
            { new: true }
        );
        if (catalog) {
            res.status(200).json({ message: 'Product deleted', catalog });
        } else {
            res.status(404).json({ error: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
