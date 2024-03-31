const express = require("express");
const app = express();
app.use(express.json());

const jwt = require("jsonwebtoken");
const jwtPassword = "12345";

const userData = [
  {
    username: "solankiansh@gmail.com",
    password: "Ansh@1904",
    name: "Ansh Solanki",
  },
  {
    username: "shreyash@gmail.com",
    password: "shreyash@1904",
    name: "shreyash singh",
  },
  {
    username: "vikraanth@gmail.com",
    password: "vikraant@1904",
    name: "vikraant sharma",
  },
];

function userNameExist(username, password) {
  let userExist = false;
  for (let i = 0; i < userData.length; i++) {
    if (userData[i].username == username && userData[i].password == password) {
      userExist = true;
    }
  }
  return userExist;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userNameExist(username, password)) {
    res.status(403).json({
      msg: "User doesn't exist in the database. ",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
    const token=req.headers.authorization;
    const decoded=jwt.verify(token,jwtPassword)
    const username=decoded.username
    
    try{
        const decoded=jwt.verify(token,jwtPassword)
        const username=decoded.username
        res.json({
            users:userData.filter(function(value)
            {
                if(value.username==username) return false;
                else return true;
            }),
        })
    }catch(err){
        return res.status(403).json({
            msg:"Invalid token"
        })
    }
});

app.listen(3000);
