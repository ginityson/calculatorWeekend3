var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var index = require('./routes/index');
var calculate = require('./routes/calculate');


// Set port number to 3000
app.set('port', 3000);
app.use(bodyParser.urlencoded({extended: true}));
app.use('/calculator', calculate);
app.use('/', index);

app.listen(app.get('port'), function() {
  console.log('Server is ready on port:' + app.get('port'));
});
