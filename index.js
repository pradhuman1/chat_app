const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io').listen(server);

io.on('connection',(socket)=>{
    console.log('a user connected');

    socket.on('chat',(data)=>{
        io.emit('message',data);
    })

    socket.on('disconnect',()=>{
        console.log('a user disconnected')
    })
})

app.get('/user1',(req,res)=>{
    res.sendFile(__dirname+'/chat.html');
})
app.get('/user2',(req,res)=>{
    res.sendFile(__dirname+'/chat.html');
})


server.listen('8000',()=>{
    console.log('app on port 8000');
})