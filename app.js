var express = require('express'); 
var app = express();

// Set the templating engine to EJS:
app.engine('html', require('ejs').renderFile);

// JS: look first in the local directory...
app.use('/js', express.static(__dirname + '/src/js'));

// CSS:
app.use('/css', express.static(__dirname + '/src/styles'));

// Set express to get html files out of the right place:
app.use(express.static(__dirname + '/src/html'));

// Listening on port 3K for now.
app.listen(3000);
console.log('Listening on port 3000');




// The following illustrates as an example that if use is applied twice, then the first found file will take precedence.
//app.use('/js/libraries', express.static(__dirname + '/src/js/libraries1'));
//app.use('/js/libraries', express.static(__dirname + '/src/js/libraries'));

// The /src directory is the catchall directory
//app.use("/", express.static(__dirname + "/src"));


//app.get('/', function(req, res){
//    console.log('this is my first routey!');
////    res.end('Hello planet earth!');
//    res.end('Hello zerp');
//});

//app.get('/hello.txt', function(req, res){
//    res.send('Hello Worldt');
//});