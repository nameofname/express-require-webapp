var express = require('express');//require express - exposes the function express.
var app = express(); //execute express...
var server = require('http').createServer(app); //create an http server using app as callback
var io = require('socket.io').listen(server);//create socket.io instance, listening on the http server.
var fs = require('fs'); // file system module
var _ = require('underscore');

// Set the templating engine to EJS:
//app.engine('html', require('ejs').renderFile);

// Reference to socket.io library -- didn't want to move it into the src directory...
app.use('/socket_js', express.static(__dirname + '/node_modules/socket.io/node_modules/socket.io-client/dist'));

// Set express to get public files from /src :
app.use(express.static(__dirname + '/src'));

//app.get('/socket-test', function(req, res){
//    res.sendfile(__dirname + '/src/html/socket-test.html');
//});

// Set up all routes that match a file inside of the html folder
// (so you don't have to create a new function for each page) :
app.use(function (req, res, next) {
    var basePath = __dirname + '/src/html';
    var fullPath = basePath + req.url + '.html'

    if (fs.existsSync(fullPath)) {
        res.sendfile(fullPath);
    } else {
        next();
    }

});

//Listening on port 3000 for the socket:
server.listen(3000);

io.on('connection', function(socket){

        socket.on('messageServer', function(data){
        socket.broadcast.emit("messageClient", {message: data});
    });
});

// file system module
