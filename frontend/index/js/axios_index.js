axios.get("http://localhost:3000").then(response => {
    let catalogo = JSON.parse(response.headers.catalog_index)
    let slide = document.getElementById("slide")
    let logged = response.headers.logged
    
    let cadastro = document.getElementById("cadastro")
    let login = document.getElementById("login")

    if(logged == "true"){
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
    catalogo.forEach(animal => {
        //criação de elementos pra igualar a o modelo anterior
        let cards = document.createElement("article")
        let linkImagem = document.createElement("a")
        let img = document.createElement("img")
        let cardsInfo = document.createElement("div")
        let infoName = document.createElement("div")
        let span = document.createElement("span")
        let nome = document.createElement("a")
        let regiao = document.createElement("p")
        let hist = document.createElement("p")
        
        //inserção das variáveis nos elementos
        nome.innerHTML = animal.name

        if(animal.sex == "macho"){
            span.classList.add("icon-mars")
        } else if(animal.sex == "femea") {
            span.classList.add("icon-venus")
        }

        if(animal.description == ""){
            hist.innerHTML = "Infelizmente, nenhuma descrição foi enviada"
        } else {
            hist.innerHTML = animal.description
        }

        let petLocation = JSON.parse(animal.location)
        regiao.innerHTML = (petLocation[1].split(" - State"))[0]

        linkImagem.href = `/pet?id=${animal.id}`
        nome.href = `/pet?id=${animal.id}`
        img.src = (JSON.parse(animal.url))[0]

        //setagem de classes
        cards.classList.add("cards")
        cardsInfo.classList.add("cards-info")
        infoName.classList.add("info-name")
        hist.classList.add("clearfix-before", "historia-pet")

        //configuração de que elementos ficam dentro de quais
        slide.appendChild(cards)
        cards.appendChild(linkImagem)
        cards.appendChild(cardsInfo)
        cards.appendChild(hist)
        linkImagem.appendChild(img)
        cardsInfo.appendChild(infoName)
        cardsInfo.appendChild(regiao)
        infoName.appendChild(nome)
        infoName.appendChild(span)

    })
})  