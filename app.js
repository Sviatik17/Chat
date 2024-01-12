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

let usersCount=0;
io.on('connection', function (socket) {
    // console.log('a user connected');
    usersCount++
    console.log(usersCount)
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function(){
        // console.log('user disconnected')
        usersCount--;
        console.log(usersCount)
        
    })
});

app.get('/getUsers',(req,res)=>{
    let data=usersCount;
    res.json(data);
})


http.listen(3000, function () {
    console.log('server listening on port:3000');
});