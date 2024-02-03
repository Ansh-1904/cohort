//async await

//normal way

// function anshsAsynFunction()
// {
//     let p=new Promise(function(resolve)
//     {
           //do some async logic here
//         resolve("Hii there")
//     })
//     return p;
// }

// function main()
// {
//     anshsAsynFunction().then(function(value){
//         console.log(value);
//     })
// }
// main()

//async await syntax

function anshsAsynFunction()
{
    let p=new Promise(function(resolve)
    {
        //do some async logic here
        setTimeout(function () {
            resolve("Hii there")
        },1000)
    })
    return p;
}

async function main()
{
    let value=await anshsAsynFunction()
    console.log(value);
}
main()

