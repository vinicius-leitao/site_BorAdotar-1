cidades = [
    "Cidade", 
    "Belford Roxo",
    "Cachoeiras de Macacu",
    "Duque de Caxias",
    "Guapimirim",
    "Itaboraí",
    "Itaguaí",
    "Japeri",
    "Magé",
    "Maricá",
    "Mesquita",
    "Nilópolis",
    "Niterói",
    "Nova Iguaçu",
    "Paracambi",
    "Petrópolis",
    "Queimados",
    "Rio Bonito",
    "Rio de Janeiro",
    "São Gonçalo",
    "São João de Meriti",
    "Seropédica",
    "Tanguá"
]

raca = [
    "Selecione",
    "cachorro",
    "gato"
]

porte = [
    "Porte",
    "pequeno",
    "medio", 
    "grande"
]
//sistema de buscas - ajeitar
let especie = document.getElementById("especie")
raca.forEach(raca => {
    opcao.innerHTML = raca
    especie.appendChild(opcao)
})

let tamanho = document.getElementById("porte")
porte.forEach(porte => {
    if(porte = "pequeno")
    let opcao = document.createElement("option")
    opcao.innerHTML = porte
    tamanho.appendChild(opcao)
})

let municipios = document.getElementById("cidades")
cidades.forEach(cidades => {
    let opcao = document.createElement("option")
    opcao.innerHTML = cidades
    municipios.appendChild(opcao)
})



