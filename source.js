const io = require('socket.io')(5000);
const fs = require('fs')
console.log("Server gone live.....")
io.on('connection',socket=>{
    socket.on('user-join',data=>{
        var key = data.identity.concat("+",data.password)
        var recff = 'ids/'
        var recfc = data.identity.concat('.txt')
        var recf = recff.concat(recfc)
        if(fs.existsSync(recf)){
            var idof = fs.readFileSync(recf)
            var found = 1
        }
        else{
            var idof = 0;
            var found = 0
        }
        if(key==idof){
            console.log(data.identity,'joined the chat');
            fs.writeFileSync("temp.txt",data.identity)

        }
        else if(found == 0){
            console.log("not matached")
            fs.writeFileSync("temp.txt","no9090")


        }
        else{
            console.log("not matached")
            fs.writeFileSync("temp.txt","no9090")


        }

    })
})
