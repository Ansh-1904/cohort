const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// app.get('/', function(req, res) {
//   res.send('Hello World!')
// })


app.use(bodyParser.json());
app.post('/', function(req, res) {
    // console.log(req.headers);


    console.log(req.body);

    res.send('Hello World!')
  })

app.listen(port)