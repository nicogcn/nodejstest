
//MAIN APP
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
//Routes
var persons = require("./routes");
app.use('/persons', persons);


app.listen(port);

console.log('REST ap Nicolás Aldana started at: ' + port);

