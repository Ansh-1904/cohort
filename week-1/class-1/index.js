// var a=1;
// a="Hello";
// a=2
// console.log(a);

// let a=1;
// a="Hello";
// a=2;
// console.log(a);

//const value cannot be changed
//let and var values can be changed

//Array
// const user=[1,2,3]
// const user2=["Ansh","Solanki"]

//objects
// const user1={
//     firstName:"Ansh",
//     gender:"Male"
// }

//console.log(user1.firstName);
/*or*/
//console.log(user1["firstName"]);

//Array of object
//print firstname of male users

// const allUsers = [
//   {
//     firstName: "Ansh",
//     gender: "Male",
//   },
//   {
//     firstName: "Shreyash",
//     gender: "Male",
//   },
//   {
//     firstName: "Priya",
//     gender: "Female",
//   },
// ];

// for(let i=0;i<allUsers.length;i++)
// {
//     if(allUsers[i]["gender"]=="Male")
//     {
//         console.log(allUsers[i]["firstName"]);
//     }
// }



//callback function 1

// You are only allowed to call one function after this
// How will you displayResult of a sum

// function sum(num1, num2, functToCall) {
//     let result = num1 + num2;
//     functToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// sum(1,2,displayResult)  //here we have passed a function to call as an argument.



//callback function example 2

// function calculatearithmetic(a,b,functionToCall)
// {
//     const ans=functionToCall(a,b);
//     return ans;
// }

// function sum(a,b)
// {
//     return a+b;
// }

// function sub(a,b)
// {
//     return a-b;
// }

// const value=calculatearithmetic(1,2,sum);
// console.log(value);

//callback function example 3

function greet()
{
    console.log("hello ansh");
}

setTimeout(greet,3*1000); //setTimeout is a function which will call greet function after 3 seconds.