const mongo = require('mongodb'); //import mongodb module to connect to your db

const url = "mongodb://localhost:27017"; //mongodb connection url (default)

const client = new mongo.MongoClient(url) // MongoClient class allow you to make a connection to Db

async function showCollections(){
    
    try { // try this block of code
    await client.connect();       //await will wait for response and it can only be used inside async function
    const studentCollection =  client.db('College').collection('Students');    //getting student collection
    const allDocument = studentCollection.find({});   //getting all document within that collection
    await allDocument.forEach((document)=>{   // looping over the documents and doing console and I was getting error if I have not used await here
    console.log(document);
   });
    } catch (e) {
        console.log(e);
    }
    finally{ 
        await client.close();  //closing the connection
    }
   

}

showCollections();

// function showCollections(){
//     client.connect(function(err,db){
//         if(err)
//         console.log(err);
//         else{
//         const studentCollection = client.db('College').collection('Students'); //getting student collection
//         const allDocument = studentCollection.find({}); //getting all document within that collection
//         allDocument.forEach((documents)=>{ // looping over the documents and doing console
//         console.log(documents);
//     })
//             }
//     });
// }

// showCollections();


