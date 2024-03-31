const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod=require("zod")

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);





function signJwt(username, password) {
    // Your code here
    const emailResponse=emailSchema.safeParse(username)
    const passwordResponse=passwordSchema.safeParse(password)

    if(!emailResponse.success || !passwordResponse.success)
    {
        return null;
    }

    const signature=jwt.sign({username},jwtPassword)
    return signature
}

// const ans=signJwt("sxsdsd@gmail.com","ssasadsa")
// console.log(ans);


function verifyJwt(token) {
    // Your code here
    let ans=true;
    try{
        jwt.verify(token,jwtPassword)

    }
    catch(err){
        ans=false
    }
    return ans;
}
const testToken=signJwt("sxsdsd@gmail.com","ssasadsa")
const ans2=verifyJwt(testToken)
console.log(ans2);


// function decodeJwt(token) {
//     // Your code here
//     const decoded=jwt.decode(token)
//     if(decoded){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const ans1=decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InN4c2RzZEBnbWFpbC5jb20iLCJpYXQiOjE3MTE5MDMxMDN9.WljYXDZpo26OsVX04De-obeHFFAPU45jZL92vNs1oeE")
// console.log(ans1);

