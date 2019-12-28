const express = require('express')
const app = express()
const port = 3000
const path = require('path');


//handle get on root dir
app.get('/', (req, res) => res.send('Hello World!'))
//handle incoming post /json
app.get('/json',function(req,res){
   //convert to json
    var jsonObj = JSON.parse(req.query.jsonText);
    //create an html var to render cvs report for the client
    var htmlToRender = "<table>"
    for(var key in jsonObj){
        htmlToRender += "<tr><td>"
        htmlToRender += jsonObj[key]
        htmlToRender += "</td></tr>"
    }
    htmlToRender += "</table>"
    res.end(`${htmlToRender}`);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))