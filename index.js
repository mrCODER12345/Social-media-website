const socket = io('http://localhost:5000')
function loginuser(){

    var userid = document.getElementById('logus').value
    var userpassword= document.getElementById('logpa').value
    socket.emit('user-join',{identity:userid,password:userpassword})
}