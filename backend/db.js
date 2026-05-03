const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", 
  database: "cdae"
});

db.connect(err => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("MariaDB conectado");
  }
});

module.exports = db;
