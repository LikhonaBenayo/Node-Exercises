const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Products routes
app.get('/products', (req, res) => {
  res.json({ message: "This is the GET product path" });
});
app.post('/products', (req, res) => {
  res.json({ message: "This is the POST product path and something was added" });
});
app.put('/products', (req, res) => {
  res.json({ message: "This is the PUT product path and something was updated" });
});
app.delete('/products', (req, res) => {
  res.json({ message: "This is the DELETE product path and something was deleted" });
});

// Users routes
app.get('/users', (req, res) => {
  res.json({ message: "This is the GET user path" });
});
app.post('/users', (req, res) => {
  res.json({ message: "This is the POST user path and something was added" });
});
app.put('/users', (req, res) => {
  res.json({ message: "This is the PUT user path and something was updated" });
});
app.delete('/users', (req, res) => {
  res.json({ message: "This is the DELETE user path and something was deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});