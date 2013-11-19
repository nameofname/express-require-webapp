var express = require('express'),//require express - exposes the function express.
    app = express(), //execute in 1 line
    server = require('http').createServer(app), //create an http server using app as callback
    io = require('socket.io').listen(server),//create socket.io instance, listening on the http server.
    nerp = require('./testExport');

// Set the templating engine to EJS:
app.engine('html', require('ejs').renderFile);

// JS: look first in the local directory...
app.use('/js', express.static(__dirname + '/src/js'));

// CSS:
app.use('/css', express.static(__dirname + '/src/styles'));

// Reference to socket.io library -- didn't want to move it into the src directory...
app.use('/socket.io', express.static(__dirname + '/node_modules/socket.io/node_modules/socket.io-client/dist'));

// Set express to get html files out of the right place:
app.use(express.static(__dirname + '/src/html'));

// Listening on port 3K for now.
app.listen(3000);


app.get('/socket-test', function(req, res){
    res.sendfile(__dirname + '/src/html/socket-test.html');
});

/**
* Set the io socket to do something on connection.
*/
console.log('socket?');
io.sockets.on('connection', function (socket) {
    console.log(socket);
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

console.log('BEW!');

