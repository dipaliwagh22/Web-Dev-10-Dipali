const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const nameSchema = new mongoose.Schema({
  name: String,
});

const Name = mongoose.model('Name', nameSchema);


app.get('/api/names', async (req, res) => {
  const names = await Name.find();
  res.json(names);
});

app.post('/api/names', async (req, res) => {
  const newName = new Name(req.body);
  await newName.save();
  res.json(newName);
});

app.put('/api/names/:id', async (req, res) => {
  const updatedName = await Name.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedName);
});

app.delete('/api/names/:id', async (req, res) => {
  await Name.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
