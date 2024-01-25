//call back function
function square(n)
{
    return n*n;
}

function cube(n)
{
    return n*n*n;
}

function sumOfSomething(a,b,callBackFn)
{
    const var1=callBackFn(a);
    const var2=callBackFn(b);
    return var1+var2
}

console.log(sumOfSomething(2,2,cube));