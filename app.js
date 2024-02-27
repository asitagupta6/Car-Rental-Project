const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Mock database
let customers = [];

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = customers.find(customer => customer.username === username && customer.password === password);
  if (user) {
    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

// Registration endpoint
app.post('/register', (req, res) => {
  const { username, password, name, email } = req.body;
  customers.push({ username, password, name, email });
  res.status(201).json({ message: 'Registration successful' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
