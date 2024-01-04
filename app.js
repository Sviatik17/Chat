let express =require('express');
let app = express();
let http = require('http').createServer(app);
let io = require('socket.io')(http);
let path =require('path')

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(path.join(__dirname,'img')));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});


io.on('connection', function (socket) {
    console.log('a user connected');
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });
});



http.listen(3000, function () {
    console.log('server listening on port:3000');
});