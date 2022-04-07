const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors')

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '051490',
  database: 'franqueados',
});

app.use(cors());
app.use(express.json());

app.post('/register', (req, res) => {
  const { name } = req.body;
  const { email } = req.body;
  const { phone } = req.body;
  const { cidade } = req.body;
  const { estado } = req.body;

  let SQL = "INSERT INTO pessoas (name, email, phone, cidade, estado) VALUES (?,?,?,?,?)";

  db.query(SQL, [name, email, phone, cidade, estado], (err, result) => {
    console.log(err)
  })
})

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001')
})