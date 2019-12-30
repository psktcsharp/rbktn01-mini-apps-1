const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
var cors = require('cors');
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
//GET Method
app.get('/', (req, res) => res.send('Hello World!'))
// POST method 
app.post('/', function (req, res) {
    console.log(req.body)
    res.send('got data')
  })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))