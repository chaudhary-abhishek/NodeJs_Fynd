const mongo = require('mongodb');//import mongodb module to connect to db

// const con = mongo.createConnection({
//     user :"",
//     password : "",
//     host : "",
// });



const url = "mongodb://localhost:27017/dbCreatedFromNode";
//mongodb://localhost:27017 this is the connection uri which I got from atlas, this uri will connect to my mongoDB instance
///dbCreatedFromNode - This is the name of the dataBase I want to create in mongodb

mongo.MongoClient.connect(url,function(err,db) //The MongoClient class is a class that allows for making Connections to MongoDB
{
    if(err)
    console.log(err);
    else
    console.log("DataBase created Successfully");
    db.close();
})

