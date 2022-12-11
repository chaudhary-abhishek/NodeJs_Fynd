const express = require('express');
var app = express();
var document = require('./fetchRecordFromDbService');

app.get('/',async function(req,res){
    const docs = await document();
    res.send(docs);
})
console.log("hello");

app.listen(8000);

