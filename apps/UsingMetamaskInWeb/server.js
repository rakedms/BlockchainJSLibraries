const express = require('express');
const path = require('path');
const app = express();

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname+"/index.html"))
})

const server = app.listen(8000);
const portNumber = server.address().port;
console.log(`Server is running in port ${portNumber}`);