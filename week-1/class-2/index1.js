//1
//javascript is single threaded so it does one work at a time 
//to do multiple things at a time async functions are used 
//thread will not be stuck at the settimeout and wait for one second it will go
//down print hi there and after one second it will do the settimeout thing
// function onDone()
// {
//     console.log("hi there1");
// }
// setTimeout(onDone,1000); //setTimeout is an asynchronous function
// console.log("hi there");




//2
//also an example of async function
// const fs=require("fs");
// fs.readFile("a.txt","utf-8", function(err,data) 
// {
//     console.log(data);
// })
//here function is an annonymous fn

// console.log("Hii there 1");
