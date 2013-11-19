/**
 * User: ronald
 * Date: 11/15/13
 * Time: 1:11 PM
 */

(function(){
    "use strict";

    var socket = io.connect('http://localhost');
    socket.on('news', function (data) {
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });

})();