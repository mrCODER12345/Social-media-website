const socket = io('http://localhost:4000')

// console.log("workign ")

function store(){
    const name = document.getElementById('cname').value
    const sirname = document.getElementById('csirname').value
    const email = document.getElementById('cemail').value
    const password = document.getElementById('cpassword').value
    const username = document.getElementById('cusername').value
    const city = document.getElementById('ccity').value
    const phone = document.getElementById('cphone').value
    const state = document.getElementById('cstate').value
    data = username.concat("+",password,"+",email,"+",name,"+",sirname,"+",city,"+",phone,"+",state)
    id_data = username.concat("+",password)
    var fol = 'records/'
    var foli = 'ids/'
    var rec = fol.concat(username,".txt")
    var rece = foli.concat(username,".txt")
    socket.emit('save',{fname:rec,odata:data})
    socket.emit('save',{fname:rece,odata:id_data})

    window.open("index.html")
    window.close()

}