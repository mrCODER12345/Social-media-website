const socket = io('http://localhost:8000')

const container = document.querySelector('.container')
const form = document.getElementById('myform')
const inputcon = document.getElementById('sender')


const append = (message,position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add("message")
    messageElement.classList.add(position)
    container.append(messageElement)
}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const messsage = inputcon.value
    const us = 'You : '
    mainmess = us.concat(messsage)
    append(mainmess,'right')
    socket.emit('message-send',messsage)
    inputcon.value = ''

})

socket.emit('new-join')
socket.on('joined',name=>{
    var enc = new TextDecoder("utf-8");
    namee = (enc.decode(name))
    var fullname = namee.concat(' joined the chat')
    append(fullname,'left')
})
socket.on('recieve',messag=>{
    var enc = new TextDecoder("utf-8");
    // console.log(messag)
    messa = enc.decode(messag.name)
    mess = messa.concat(' : ',messag.message)
    append(mess,'left')
})
