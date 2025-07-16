const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',          
  password: '', // Use your MySQL password    
  database: 'shopleft_database'
});

conn.connect(err => {
  if (err) {
    console.error('Connection failed:', err.message);
    return;
  }
  console.log('Connected to MySQL database ✅');
});

module.exports = conn;
