const fs = require('fs'); //Here we are importing fs module
//Below readFile method is taking three argument:
// 1-File path
// 2-encoding(if no encoding is given then it will return raw data) 
// 3-error or data
fs.readFile('./myFile.txt','utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data);
    }
});
