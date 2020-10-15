//importação de modulos
const path = require("path") //caminhos
const jwt = require('jsonwebtoken') //autenticação

//importação da tabela
const Pet = require("../database/Pet") //importação da tabela
const User = require("../database/User")

//importação de funções
const spliter = require("../routes/middleware/scripts/tokenSplt")
const getLocation = require("../routes/scripts/maps")

class PetController { //cadastro de um novo pet

    static petForm(req, res) {
        res.sendFile(path.resolve(__dirname, "../views/cadastro-pet/cadastroPet.html"))
    }

    static pet(req, res) {
        let id = parseInt(req.query.id)
        if(id == undefined || id == null || isNaN(id)){
            res.redirect("/user/me")
        } else {
            Pet.findOne({
                where: {
                    id
                }
            }).then(pet => {
                User.findOne({
                    where: {
                        id: pet.userId
                    }
                }).then(user => {
                res
                    .append("owner", JSON.stringify(user))
                    .append("pet", JSON.stringify(pet))
                    .sendFile(path.resolve(__dirname, "../views/pet/pet.html"))
                })
            })
        }
    }

    static async create(req, res) { //array de fotos!!!
        let token = jwt.decode(spliter(req.headers.cookie))
        let url = []
        let location 
        req.files.forEach(function(photo, i){
            url[i] = photo.location    
        })
        let {nome: name, especie: specie, porte: port, idade: age, sexo: sex, historiaPet: description, local, cep} = req.body
        if(local == "on"){
            location = token.location
        } else {
            location = await getLocation(cep)
        }
        
        await Pet.create({
            name,
            specie,
            port,
            age,
            sex,
            description,
            url: JSON.stringify(url),
            location,
            userId: token.id
        }).then(() =>
            res.redirect("/user/me")
        ).catch(err => {
            console.log(err)
        })
    }
}

module.exports = PetController