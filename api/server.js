const express = require("express");
const app = express();
const port = 8080;

require("dotenv").config()
const knexfile = require('./knexfile.js')
const knex = require('knex')(knexfile['development'])

app.get('/',(req, res)=>{
  res.status(200).send('My API is up and running YOo');
});

app.get('/authors', (req, res)=>{
  knex('authors').select('*').then(authors=>{
    res.status(200).json(authors).send()
  })
});

app.listen(port,()=>{console.log(`Express server listening on localhost:${port}`)});
