const socket = io('http://localhost:5000')
const source = require('./source.js')
function loginuser(){
    console.log(window.location.href)
    var userid = document.getElementById('logus').value
    var userpassword= document.getElementById('logpa').value
    socket.emit('user-join',{identity:userid,password:userpassword})
    const access = source.ret() 
    if(access==1){
        window.open('chat.html')
    }
    else{
        console.log('no')
    }
}