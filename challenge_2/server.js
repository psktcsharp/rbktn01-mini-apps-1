const express = require('express')
const app = express()
const port = 3000
//handle get on root dir
app.get('/', (req, res) => res.send('Hello World!'))
//handle incoming post /json
app.post('/json',function(req,res){
   
    console.log(req.body);
    res.end("yes");
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))