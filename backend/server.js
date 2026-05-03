const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// conexión a la base de datos
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", // tu contraseña
  database: "cdae"
});

db.connect(err => {
  if (err) {
    console.log("Error de conexión:", err);
  } else {
    console.log("MariaDB conectado");
  }
});

// ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

// 🔥 REGISTRO
app.post("/registro", (req, res) => {
  const { nombre, correo, password } = req.body;

  const sql = "INSERT INTO alumnos (nombre, correo, password) VALUES (?, ?, ?)";

  db.query(sql, [nombre, correo, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error al registrar");
    }
    res.send("Usuario registrado");
  });
});

// 🔥 LOGIN
app.post("/login", (req, res) => {
  const { correo, password } = req.body;

  const sql = "SELECT * FROM alumnos WHERE correo = ? AND password = ?";

  db.query(sql, [correo, password], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("Error en login");
    }

    if (result.length > 0) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

// iniciar servidor
app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});
