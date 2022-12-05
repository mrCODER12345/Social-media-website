const io = require('socket.io')(4000);
const fs = require('fs')

console.log('Server gone live')
io.on('connection',socket=>{
    socket.on('save',tobesaved=>{
        if(fs.existsSync(tobesaved.fname)){
            console.log("Username already exists")
        }
        else{
            fs.writeFileSync(tobesaved.fname,tobesaved.odata)
        }
    })   
})
