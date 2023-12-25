let socket = io();
$('#form').submit(function() {
   
    socket.emit('chat message', $('#message_info').val());
    $('#message_info').val('');
    return false;
});
socket.on('chat message', function(data) {
    $('#messages').append($('<li>').text(data));
});


