const io = require('socket.io')(8000)

users = {}

io.on('connection',socket=>{
    socket.on('new-join',username=>{
        users[socket.id] = username
        socket.broadcast.emit('joined',users[socket.id])
    })
    socket.on('message-send',message=>{
        socket.emit('recieve',{name:user[socket.id],message:message})
    })
})