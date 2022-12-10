const express = require('express');
var app = express();
var document = require('./fetchRecordFromDbService');

app.get("/users",async function(req,res){
    const docs = await document();
    res.send(docs);
})

app.listen(8000);

