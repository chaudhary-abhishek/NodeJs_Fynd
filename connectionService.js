const mongo = require("mongodb");
const url = "mongodb://localhost:27017";

const mongoClient = new mongo.MongoClient(url);

mongoClient.connect(function(err,db){
    if(err) throw err;
    else
    console.log("Connection to db has been established");
})

module.exports = mongoClient;



/*function con() {
  

  mongoClient.connect(function (err, db) {
    if (err) throw err;
    else console.log("connection to db has been established");
  });
  
};

module.exports = {con,mongoClient}
  
// This is the one way of exporting, I am putting this for my reference
*/

