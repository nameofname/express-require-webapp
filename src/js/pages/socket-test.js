/**
 * User: ronald
 * Date: 11/15/13
 * Time: 1:11 PM
 */

(function(){
    "use strict";

    var socket = io.connect('http://localhost');

    $('input').on('change', function(e){
        var val = $(this).val();
        console.log('changing', val);
        socket.emit('messageServer', { message: val });
    });

    socket.on('messageClient', function (data) {
        var templateData = {
            message : data.message.message
        };
        var row = _.template($('#template-message').html(), templateData, {variable: 'obj'});
        console.log(row);
        $('#messageArea tbody').append(row);
    });

})();