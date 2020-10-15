let route = document.location.search
let ul = document.getElementById("ul")
let user

axios.get(`http://localhost:3000/user/chat/${route}`).then(response => {
    user = JSON.parse(response.headers.user)
    let pets = JSON.parse(response.headers.pets)
    pets.forEach(pet => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let p = document.createElement("p")
        let span = document.createElement("span")
        let a = document.createElement("a")

        a.href = `http://localhost:3000/user/chat?petId=${pet.id}`
        a.classList.add("link-chat")
        li.classList.add("users", "a")

        img.src = (JSON.parse(pet.url))[0]
        span.innerHTML = pet.name

        ul.appendChild(li)
        li.appendChild(a)
        a.appendChild(img)
        a.appendChild(span)
        a.appendChild(p)

        if(route == `?petId=${pet.id}`){
            li.classList.add("user-active")
            a.style.color = "white"
        }
    })

    const chat = document.getElementById("chat")
    const chatArea = document.getElementById("chat-area")

    const socket = io()
    let room = (route.split("="))[1]

    socket.emit("joinRoom", room)

    socket.on('chat-message', message => {
        outputMessage(message)
        chat.scrollTop = chat.scrollHeight //mantem o scroll sempre orientado pra baixo
    })

    

    let fullname = `${user.name} ${user.lastname}`

    chatArea.addEventListener("submit", event => {
        event.preventDefault()
        const msg = event.target.elements.mensagem.value

        //mandando uma mensagem ao servidor
        let name = {fullname, msg}
        socket.emit("message", name)
        event.target.elements.mensagem.value = "" //limpa a text area assim que a mensagem é mandada para o servidor
        event.target.elements.mensagem.focus()
    })

    function outputMessage(message){
        let spanName = document.createElement("span")
        let spanHour = document.createElement("span")
        let div = document.createElement("div")
        let p = document.createElement("p")
        p.innerHTML = message.text
        spanName.innerHTML = message.username
        spanHour.innerHTML = message.time

        if(message.username !== fullname){
            div.classList.add("msgOther")
            spanName.classList.add("otherName")
            spanHour.classList.add("other-hour")
        } else {
        spanName.classList.add("userName")
        spanHour.classList.add("user-hour")
        div.classList.add("msgUser")
        }

        div.appendChild(spanName)
        div.appendChild(p)
        div.appendChild(spanHour)
        chat.appendChild(div)
    }
})