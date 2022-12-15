var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var urlEncodedParser = bodyParser.urlencoded({extended:false}); 

app.post('/process_post',urlEncodedParser,function(req,res){
    response = {
        first_name: req.body.firstName,
        last_name: req.body.lastName
    };
    console.log(response);
    res.send(JSON.stringify(response));
});

app.listen(8000);
