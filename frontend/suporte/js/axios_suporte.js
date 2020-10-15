axios.get("http://localhost:3000/suporte").then(response => {
    let logged = response.headers.logged

    let login = document.getElementById("login")
    let cadastro = document.getElementById("cadastro")

    if(logged == "true"){
        login.innerHTML = "Perfil"
        cadastro.innerHTML = "Chat"

        login.href = "/user/me"
        cadastro.href = "/user/chat"
    }
})