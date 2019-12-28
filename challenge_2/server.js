const express = require('express')
const app = express()
const port = 3000
const path = require('path');

var htmlToRender =""
//handle get on root dir
app.get('/', (req, res) => res.send('Hello World!'))
//handle incoming post /json
app.get('/json',function(req,res){
   //convert to json
    var jsonObj = JSON.parse(req.query.jsonText);
    var kids = []
    //create an html var to render cvs report for the client
    var htmlToRender = "<table><tr>"
    // if it's the first object render some colms with key as headers
    for (var key in jsonObj) {
        htmlToRender += `"<th>"${key}"</th>"`
    }
    htmlToRender += "<tr>"
 // render html for a child and add it to table


     renderHTML = (aChild) => {
         console.log("has a kid ? ",aChild)
         if(aChild){jsonObj =aChild }
        for (var key in jsonObj) {    
            htmlToRender += `<td>${jsonObj[key]}</td>`
            if(jsonObj["children"].length >0)
            {
                console.log("found kids trying to render")
                for(var i = 0 ;i< jsonObj["children"].length;i++){
                    kids.push(jsonObj["children"][i])
                }
            }
            else{}
        }
    }
    //clean dublicated entries
    renderHTML()
    if(kids.length > 0){
        for(var i = 0; i < kids.length;i++){
        htmlToRender += "<tr>"
        renderHTML(kids[i])
        htmlToRender += "</tr>"
        }
    }
        htmlToRender += "</tr></table>"
      
    res.end(`${htmlToRender}`);
  });
  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))