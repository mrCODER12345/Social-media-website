const io = require('socket.io')(4000);
const fs = require('fs')

io.on('connection',socket=>{
    socket.on('save',tobesaved=>{
        fs.writeFileSync(tobesaved.fname,tobesaved.odata)
    })   
})
