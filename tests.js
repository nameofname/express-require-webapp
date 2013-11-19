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