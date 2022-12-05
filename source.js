const io = require('socket.io')(5000);
const fs = require('fs')
console.log("Server gone live.....")

io.on('connection',socket=>{
    socket.on('user-join',data=>{
        var key = data.identity.concat("+",data.password)
        var recff = 'ids/'
        var recfc = data.identity.concat('.txt')
        var recf = recff.concat(recfc)
        var idof = fs.readFileSync(recf)
        if(key==idof){
                console.log(data.identity,'joined the chat');
        }
        else{
            console.log("not matached")
        }

    })
})