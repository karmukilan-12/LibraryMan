const express = require('express');
const mysql = require('mysql2');
const cors = require("cors");

const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Kar@db04',
  database: 'library'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.get('/books', (req, res) => {
  const sql = 'SELECT title, author, subject, publish_date FROM books';
  db.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result)
    res.json(result);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
