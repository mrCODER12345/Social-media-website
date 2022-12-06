const socket = io('http://localhost:8000')

const container = document.querySelector('.container')
const form = document.getElementById('myform')
// const inputcon = document.getElementById('sender')
const usern = prompt('Enter name')

const append = (message,position)=>{
    const messageElement = document.createElement('div')
    messageElement.innerText = message;
    messageElement.classList.add("message")
    messageElement.classList.add(position)
    container.append(messageElement)
}

console.log(usern)
socket.emit('new-join',usern)
socket.on('joined',name=>{
    fullname = name.concat(' joined the chat')
    append(fullname,'left')
})
console.log(container)
// console.log('sender')
// console.log()
