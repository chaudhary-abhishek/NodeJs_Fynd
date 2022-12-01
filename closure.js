
function outerFunc(){
    //secondInner(); ---> name is not defined yet
    var name = "Abhishek";

    function innerFunc(){
      console.log(name+" You are in innerFunc");
    }
    console.log("Hi");
    secondInner();
    innerFunc();
    //secondInner();
    function secondInner(){
      // var secondInnervar = "Hello";
      console.log(name+"You are in secondInner Function");
    }
    innerMost();
    function innerMost(){
      console.log(name+" You are in innerMost Function ");
    }

}

outerFunc();
//innerFunc();














// function init(){
//     var name = "Abhishek Choudhary";
//     function innerFunction(){
//         console.log(name); // due to lexical scoping(inner function contains the scope of outerFunction) name is accessible here
//     }
//     innerFunction();
// }
// init();

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5); // return a function having x value 5
//   const add10 = makeAdder(10);
//   //add5 and add10 are closure
//   console.log(add5);
  
//   console.log(add5(2)); // 7
// //   console.log(add10(2)); // 12
  