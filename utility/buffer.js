var buffer1 = Buffer.alloc(100);

buffer1.write("I am also here");
var mess = buffer1.toString('utf-8');
console.log(mess);

var bufferSrc = new Buffer('ABC');
var bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest); //first is that buffer from where we are copying and second one is to which we are passing
var data = bufferDest.toString('utf-8');
console.log(data);

//Slicing or getting portion of data

var bufferOld = new Buffer("India is great");
var bufferNew = bufferOld.slice(0,4); // 4 is exclusive
console.log(bufferNew.toString('utf-8'));

// Concatinate two buffer

var bufferOne = new Buffer("INDIA");
var bufferTwo = new Buffer(" IS GREAT");
var bufferConcat = Buffer.concat([bufferOne,bufferTwo]);
console.log(bufferConcat.toString("utf-8"));
