axios.get("http://localhost:3000/user/me").then(response => {
    let lista = response.headers.user.split(", undefined")
    let pets = JSON.parse(response.headers.pets)
    let user = JSON.parse(lista[0])

    let list_pets = document.getElementById("list-pets")
    let petbar = document.getElementById("pet-bar")
    let contador = document.getElementById("contador")
    let name = document.getElementById("nome")
    let cadastro = document.getElementById("cadastro")
    let login = document.getElementById("login")

    if(user.logado == true && user){

        //definição
        login.innerHTML = "Perfil"
        cadastro.innerHTML = "Chat"
        
        if(pets.length > 1){
            contador.innerHTML = `Você tem ${pets.length} pets para adoção`
        } else if(pets.length == 1) {
            contador.innerHTML = `Você tem ${pets.length} pet para adoção`
        } else {
            contador.innerHTML = `Você não nenhum pet para a adoção`
            list_pets.style.display = "none"
            let img = document.createElement("img")
            img.classList.add("img-test")
            img.src = "./img/cat.png"
            petbar.appendChild(img)
        }

        //setagem de rotas
        login.setAttribute("href", "/user/me")
        cadastro.setAttribute("href", "/user/chat")
    }

    name.innerHTML = `${user.name} ${user.lastname}`

    pets.forEach(pet => {

        
        //criação de elementos
        let link = document.createElement("a")
        let list = document.createElement("li")
        let img_pet = document.createElement("div")
        let img = document.createElement("img")
        let name = document.createElement("h2")

        //setagem de classes
        img_pet.setAttribute("class", "img-dog")
        link.classList.add("tira-cor")

        //setagem de links
        img.src = (JSON.parse(pet.url))[0]
        link.href = `http://localhost:3000/pet?id=${pet.id}`

        //Conteúdo - nome do pet
        name.innerHTML = pet.name

        //definição de qual elemento está dentro de qual
        list_pets.appendChild(link)
        link.appendChild(list)
        list.appendChild(img_pet)
        list.appendChild(name)
        img_pet.appendChild(img)
    })
})

