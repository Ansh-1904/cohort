//1
// const input=[1,2,3,4,5];

// function tranform(i)
// {
//     return i*2;
// }

// const ans=input.map(tranform);
// console.log(ans);

//2

const input=[1,2,3,4,5];


function filterLogic(i)
{
    if(i%2==0) return true;
    else return false;
}

const ans=input.filter(filterLogic);
console.log(ans);
