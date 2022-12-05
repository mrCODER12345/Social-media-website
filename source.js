const io = require('socket.io')(5000);
console.log("Server gone live.....")

io.on('connection',socket=>{
    socket.on('user-join',data=>{
        var key = data.identity.concat("+",data.password)
        if(key=="aryan+shrivastava"){
            console.log("matched")
            console.log(data.identity,'joined the chat');
        }
        else{
            console.log("not matached")
        }
    })
})