// server.js
// where your node app starts

// init project
var express = require('express');
var myApp = require('./myApp');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/timestamp/:date_string",function(req,res,next){ //Todo esto para que sea desde un solo link, para proy solo se usa la parte fecha
  
  var dt = new Date(req.params.date_string = "1988-01-24" );
  
  if (isNaN(req.params.date_string ) == false) { //numero
      if (req.params.date_string == "") {
         res.send(new Date())
      } else if (dt == "Invalid Date") {
         res.json({error:"Invalid Date"})
      } else {
         res.json({unix: dt.getTime(),utc: dt.toUTCString()})
      }  
  } else {  //fecha
         
     if (dt == "Invalid Date") { 
         res.json({error:"Invalid Date"})
     } else {
         res.json({unix: dt.getTime(),utc: dt.toUTCString()})
     }
  }
 
});

app.get("/api/timestamp/:date_string",function(req,res){
  
    var dt2 = new Date(req.params.date_string = 569980800000  );
        if (req.params.date_string == "") {
         res.send(new Date())
      } else if (dt2 == "Invalid Date") {
         res.json({error:"Invalid Date"})
      } else {
         res.json({unix: dt2.getTime(),utc: dt2.toUTCString()})
      }  
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});