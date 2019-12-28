const express = require('express')
const app = express()
const port = 3000
const path = require('path');

var htmlToRender = ""
//handle get on root dir
app.get('/', (req, res) => res.send('Hello World!'))
//handle incoming post /json
app.get('/json', function (req, res) {
    //convert to json
    var jsonObj = JSON.parse(req.query.jsonText);
    var kids = []
    //create an html var to render cvs report for the client
    var htmlToRender = `<html><head><title>CSV REPORT</title><h1>CSV REPORT</h1><style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    </style></head></html>` + "<table><tr>"
    // if it's the first object render some colms with key as headers
    for (var key in jsonObj) {
        if (key === "children") { } else {
            htmlToRender += `"<th>"${key}"</th>"`
        }
    }
    htmlToRender += "<tr>"
    // render html for a child and add it to table


    renderHTML = (aChild) => {

        if (aChild) { jsonObj = aChild }
        for (var key in jsonObj) {
            
            if (jsonObj[key].toString() !== "[object Object],[object Object]") {
                htmlToRender += `<td>${jsonObj[key]}</td>`
            }
            
            if (jsonObj["children"].length > 0) {
                console.log("found kids trying to render")

                for (var i = 0; i < jsonObj["children"].length; i++) {
                    if (!aChild) {

                        extractKids(jsonObj["children"][i])
                    }
                }

            }
        
        }
    }
    //extract children outside to avoid double pushing
    var cleanKids = []
    for (var i = 0; i < kids.length; i++) {
        var doubleCounter = 0;
        for (var j = 0; j < kids.length; j++) {
            if (deepEquals(kids[i], kids[j])) {
                doubleCounter++;
            }

        }
        if (doubleCounter < 2) {
            cleanKids.push[kids[i]]
        }
    }
    extractKids = (aKid) => {

        kids.push(aKid)
        if (aKid['children']) {
            for (var i = 0; i < aKid['children'].length; i++) {
                extractKids(aKid['children'][i])
            }
        }
    }

    renderHTML()

    console.log(kids.length)
    if (kids.length > 0) {
        //clean dublicated by hard coding the limit .. to be fixed later
        for (var i = 0; i < 4; i++) {
            htmlToRender += "<tr>"
            renderHTML(kids[i])
            htmlToRender += "</tr>"
        }
    }
    htmlToRender += "</tr></table>"

    res.end(`${htmlToRender}`);
});
// comparing objects to avoid the dublicated entry bug on csv report view
var deepEquals = function (obj1, obj2) {

    if (obj1 === obj2) { return true; }
    if (obj1 && !obj2 || !obj1 && obj2) { return false; }
    if (!(obj1 instanceof Object) || !(obj2 instanceof Object)) { return false; }
    var obj1Keys = Object.keys(obj1);
    var obj2Keys = Object.keys(obj2);
    if (obj1Keys.length !== obj2Keys.length) { return false; }
    if (obj1Keys.length === 0) { return true; }
    for (var i = 0; i < obj1Keys.length; i++) {
        if (!obj2.hasOwnProperty(obj1Keys[i])) { return false; }
        if (!deepEquals(obj1[obj1Keys[i]], obj2[obj1Keys[i]])) { return false; }
    }
    return true;
};
app.listen(port, () => console.log(`Example app listening on port ${port}!`))