const io = require('socket.io')(8000)
const fs = require('fs')

users = {}

io.on('connection',socket=>{
    socket.on('new-join',()=>{
        const username = fs.readFileSync("temp.txt")
        if(username!="no9090"){
            console.log(username.toString())
            users[socket.id] = username
            socket.broadcast.emit('joined',users[socket.id])
        }
        else{
            console.log("not loged")
        }
    })
    socket.on('message-send',message=>{
        socket.broadcast.emit('recieve',{name:users[socket.id],message:message})
    })
})