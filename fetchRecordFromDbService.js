var express = require('express');
var app = express();
const client = require('./connectionService');


const fetchCollection = client.db('College').collection('Students');
const documents = async function () {
	return await fetchCollection.find({}).toArray();
}

module.exports = documents;




// app.get("/users",async function(req,res){
//     const docs = await documents();
//     res.send(docs);
// })

// app.listen(8000);









/*client.con();
const fetchCollection = client.mongoClient.db('College').collection('Students');
const documents = fetchCollection.find({});
documents.forEach(document=>{
    console.log(document);
}) This is one way, just for my understanding*/
