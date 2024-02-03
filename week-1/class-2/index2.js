//1
// const fs=require("fs")
// //my own asynchronous function
// function anshfn(callbackFn)
// {
//     fs.readFile("a.txt","utf-8", function(err,data) 
//     {
//         callbackFn(data);
//     })
// }
// //callback function to call
// function onDone(data)
// {
//     console.log(data);
// }
// anshfn(onDone);

//2
//how promises syntax are diff from above

// const fs=require("fs")
// function anshsReadFile(){
//     return new Promise (
//         function(resolve){
//             fs.readFile("a.txt","utf-8",function(err,data){
//                 resolve(data);
//             })
//         }
//     )
// }

// function onDone(data){
//     console.log(data);
// }
// anshsReadFile().then(onDone);

//3
//inside promise you need to pass a resolve function as its first argumenets
// var d=new Promise(function(resolve){
//     resolve("Hello");
// })

// function callback()
// {
//     console.log(d);
// }

// d.then(callback);

//4 
//read and then write into a file

// const fs=require("fs");

// function putCopyrightToFile(cb)
// {
//     fs.readFile("a.txt","utf-8", function(err,data){
//         data=data+" copyright 2020 Ansh was here";
//         fs.writeFile("a.txt", data, function(err) {
//             if (err) {
//                 console.error("Error writing to file:", err);
//                 return;
//             }

//             cb();
//         });
        
//     })
// }

// putCopyrightToFile(function()
// {
//     console.log("Copyright added");
// })



//5


function promisifiedMyOwnSetTimeout(duration)
{
    const p=new Promise(function(resolve){
        setTimeout(function()
        {
            resolve();
        },duration)
    });
    return p;
}
const ans=promisifiedMyOwnSetTimeout(1000);
ans.then(function()
{
    console.log("timeout is done!.");
})