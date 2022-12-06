var express = require('express'); // we are importig express library(module)

var app = express();// app has got all the facility which was with express


var server = app.listen(8000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(host);
    console.log(port);
    console.log("application runs at https://",host," ",port);
})
// app.get("/",function(req,res){
//     res.send("This is the response for the request");
// })