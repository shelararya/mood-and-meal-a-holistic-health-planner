const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'Your username',       // your MySQL user
  password: 'your password',       // your MySQL password
  database: 'mood_meals'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected!');
});

// Signup route
app.post('/signup', async (req, res) => {
  const { name, username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (name, username, password) VALUES (?, ?, ?)';
  db.query(query, [name, username, hashedPassword], (err, _result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Username already exists' });
      }
      return res.status(500).json({ message: 'Server error' });
    }
    res.json({ message: 'Signup successful' });
  });
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM users WHERE username = ?';
  db.query(query, [username], async (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const user = results[0];

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    res.json({ message: 'Login successful' });
  });
});



app.post('/contactus', (req, res) => {
  const { name, email, subject, message } = req.body;

  // console.log("Received contact form:",req.body);

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Required fields missing.' });
  }

  const query = 'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(query, [name, email, subject, message], (err, _result) => {
    if (err) {
      console.error('Error inserting contact message:', err);
      return res.status(500).json({ message: 'Server error while saving message.' });
    }

    res.json({ message: 'Message received! We will contact you soon.' });
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});