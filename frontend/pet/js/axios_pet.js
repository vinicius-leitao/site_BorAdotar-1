let id = window.location.search
let petContainer = document.getElementById("pet-container")
axios.get(`http://localhost:3000/pet${id}`).then(response => {
    let pet = JSON.parse(response.headers.pet)
    let user = JSON.parse(response.headers.owner)
    let urls = JSON.parse(pet.url)
   
    let imgs = document.querySelectorAll(".img-select")
    let imgGrande = document.querySelector(".img-focus")

    imgGrande.src = urls[0]

    let cont = 0
    urls.forEach(url => {
        (imgs[cont]).src = url
        imgs[cont].classList.add("checked") 
        cont++
    })

    imgs.forEach(img => {
        if(!img.classList.contains("checked")){
            img.style.display = "none"
        }
    })

    let botao = document.getElementById("botao")
    let donoName = document.getElementById("dono-nome")
    let name = document.getElementById("name")
    let specie = document.getElementById("specie")
    let sex = document.getElementById("sex")
    let desc = document.getElementById("desc")
    let port = document.getElementById("porte")

    if(pet.description == ""){
        desc.innerHTML = "Infelizmente, nenhuma descrição foi enviada"
    } else {
        desc.innerHTML = pet.description
    }

    donoName.innerHTML = `Cadastrado por: ${user.name} ${user.lastname}`
    name.innerHTML = pet.name
    specie.innerHTML = ` ${pet.specie}`
    sex.innerHTML = ` ${pet.sex}`
    port.innerText = ` ${pet.port}`
    
    botao.href = `http://localhost:3000/user/chat?petId=${pet.id}`
})