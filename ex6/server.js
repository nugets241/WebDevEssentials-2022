const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 3000;

require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

//Greetings (Extra)
app.get('/', (req, res) => {
  res.send('Well, hello there!')
})

//http://localhost:3000/items
app.get('/items',(req, res) =>{
  let sql = `SELECT name,info FROM owned_object
            ORDER BY name ASC, info ASC;`;
  connection.query(sql, (err, result) =>{
    if(err) throw err;
    res.json(result);
  })
});

//http://localhost:3000/acquisitions
app.get('/acquisitions',(req, res) =>{
  let sql = `SELECT p.name AS owner_name, oo.name AS item, oo.info
            FROM acquisition
            JOIN person AS p ON owner = p.id
            JOIN owned_object AS oo ON item = oo.id
            ORDER BY acquisition_datetime DESC;`;
  connection.query(sql, (err, result) =>{
    if(err) throw err;
    res.json(result);
  })
});

//http://localhost:3000/latest4 
app.get('/latest4',(req, res) =>{
  let sql = `SELECT p.name AS owner_name, oo.name AS item, oo.info
            FROM acquisition
            JOIN person AS p ON owner = p.id
            JOIN owned_object AS oo ON item = oo.id
            ORDER BY acquisition_datetime DESC
            LIMIT 4;`;
  connection.query(sql, (err, result) =>{
    if(err) throw err;
    res.json(result);
  })
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})