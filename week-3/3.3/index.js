//generate, decode and verify
const jwt=require("jsonwebtoken")

const data={
    username:"Ansh Solanki",
    acc_details :121212
}

//to generate token
//secret is the password of mine
// const value=jwt.sign(data,"secret")
// console.log(value);

//to verify token
//here person tried to guess password but got invalid signature error
const verifying=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkFuc2ggU29sYW5raSIsImFjY19kZXRhaWxzIjoxMjEyMTIsImlhdCI6MTcxMTkwMTMxMn0.uiVkq16FUy0XST2ybpqrWc5UcF7Wh68Sov4jPBAjWLI","gwjsasbab")
console.log(verifying);