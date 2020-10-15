let search = window.location.search
axios.get(`http://localhost:3000/catalogo${search}`).then(response => {
    let catalog = JSON.parse(response.headers.catalog)
    let logged = response.headers.logged
    let list = document.getElementById("catalogo-container")

    let cadastro = document.getElementById("cadastro")
    let login = document.getElementById("login")
    
    if(logged === "true"){
        login.innerHTML = "Perfil"
        cadastro.innerHTML = "Chat"

        login.setAttribute("href", "/user/me")
        cadastro.setAttribute("href", "/user/chat")
    } else {
        login.innerHTML = "Entrar"
        cadastro.innerHTML = "Cadastrar"

        login.setAttribute("href", "/login")
        cadastro.setAttribute("href", "/cadastro")
    }

    catalog.forEach(animal => {
        let location = JSON.parse(animal.location)
        let bairro = location[1].split(" - State") 
        //criação de elementos
        let div = document.createElement("div")
        let box = document.createElement("article")
        let img = document.createElement("img")

        let link = document.createElement("a")
        let nome = document.createElement("h3")

        let regiao = document.createElement("a")
        let porte = document.createElement("p")
        let genero = document.createElement("span")

        //inserção das variáveis nos elementos
        nome.innerHTML = animal.name
        regiao.innerHTML = bairro[0]
        if(animal.sex == "femea"){
            genero.classList.add("icon-venus")
        } else if (animal.sex == "macho"){
            genero.classList.add("icon-mars")
        }

        porte.innerHTML = animal.port.toUpperCase()

        //setagem de links
        img.src = (JSON.parse(animal.url))[0]

        //setagem de atributos para carregar o estilo do css e links
        box.classList.add("box-pet")
        link.setAttribute("href", `/pet?id=${animal.id}`)
        regiao.setAttribute("class","regiao-a")
        porte.setAttribute("class", "clear")

        //configuração de que elementos ficam dentro de quais
        list.appendChild(box)
        link.appendChild(nome)
        box.appendChild(div)
        box.appendChild(link)
        box.appendChild(regiao)
        box.appendChild(porte)
        box.appendChild(genero)
        div.appendChild(img)
    })
})