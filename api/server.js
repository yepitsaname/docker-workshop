const express = require("express");
const app = express();
const port = 8080;

app.get('/',(req, res)=>{
  res.status(200).send('My API is up and running YO');
});

app.listen(port,()=>{console.log(`Express server listening on localhost:${port}`)});
