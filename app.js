/**
node app1.js
Hola Mundo
**/

// Parse body in API call
var bodyParser = require("body-parser");
var express = require("express");

var app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/v1/helloworld', function(req, res) {
  res.json( { message: 'Hello World!' } );
});

app.get('/v2/helloworld', function(req, res) {
    res.json( { message: 'Hello World!' } );
});
// Declare an array of JSON objects
const employees1 = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter"}
];
const employees2=[
  { id: 1, name: "John" ,lastname:"martinez"},
  { id: 2, name: "Peter",lastname:"Griffin" }
]
function sliceApi(){
  var temp=employees1;
  temp.forEach(function(element){
    console.log(typeof(element))
    delete element.lastname;
  })
  console.log(temp)
  return temp
}

// Route to employees v2
app.get('/v1/employees', function(req, res) {
  // Print JSON array
  console.log("first version")
  res.json( sliceApi());

  // res.json( { employees1 } );

});

// Route to employees v2
app.get('/v2/employees', function(req, res) {
  // Print JSON array
  res.json( { employees2 } );
});

var PORT = process.env.port || 3000;

app.listen(PORT, function() {
  console.log(`App running in port ${PORT}`);
});
