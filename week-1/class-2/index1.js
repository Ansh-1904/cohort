//also an example of async function
const fs=require("fs");
fs.readFile("a.txt","utf-8", function(err,data) 
{
    console.log(data);
})
//here function is an annonymous fn

console.log("Hii there 1");
