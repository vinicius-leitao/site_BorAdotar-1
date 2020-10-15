//importação de módulos
const path = require("path")
const jwt = require("jsonwebtoken")
require("dotenv").config()

//importação da tabela do BD
const Pet = require("../database/Pet")

//importação das funções
const spliter = require("../routes/middleware/scripts/tokenSplt")


class PublicController{
    
    static homePage(req, res){ //página principal
        Pet.findAll({limit: 6}).then(pets => { //exibe itens na index como um mini catalogo/preview
            let logged
            if(req.headers.cookie != undefined ){
                jwt.verify(spliter(req.headers.cookie), process.env.JWT_AUTHENTICATION, (err, data) => {
                    if(err){
                        logged = false
                    } else {
                        logged = true
                    }
                })
            } else {
                logged = false
            }
            res
                .append("logged", JSON.stringify(logged))
                .append("catalog_index", JSON.stringify(pets)) //passando a seleção da tabela como parametro do header
                .sendFile(path.resolve(__dirname, "../views/index/index.html"))
        }).catch(err => {
            console.log(err)
        })
    }

    static cadastro(req, res){ //rota get -> rota post está no arquivo newUserController
        res.sendFile(path.resolve(__dirname, "../views/cadastro/cadastro.html"))
    }

    static suporte(req, res){
        let logged
        if(req.headers.cookie != undefined ){
            jwt.verify(spliter(req.headers.cookie), process.env.JWT_AUTHENTICATION, (err, data) => {
                if(err){
                    logged = false
                } else {
                    logged = true
                }
            })
        } else {
            logged = false
        }
        res
            .append("logged", JSON.stringify(logged))
            .sendFile(path.resolve(__dirname, "../views/suporte/suporte.html"))
    }

    static catalogo(req, res){ //renderização e lógica de paginação da página de catálogo
        let logged = false
        let user
        if(req.headers.cookie != undefined ){
            jwt.verify(spliter(req.headers.cookie), process.env.JWT_AUTHENTICATION, (err, data) => {
                if(err){
                    logged = false
                } else {
                    user = jwt.decode(spliter(req.headers.cookie))
                    logged = true
                }
            })
        } else {
            logged = false
        }
        let search = {}
        let specie = req.query.especie
        let port = req.query.porte
        let name = req.query.nome

        if(specie){
            search.specie = specie
        }
        if(port){
            search.port = port
        }
        if(name){
            search.name = name
        }
        
        Pet.findAll({
            where: search
        }).then(pets => {
            res
            //problema do nav autenticado
                .append("user", JSON.stringify(user))
                .append("logged", JSON.stringify(logged))
                .append("catalog", JSON.stringify(pets)) //lista de pets
                .sendFile(path.resolve(__dirname, "../views/catalogo/catalogo.html")) //renderização da página
        }).catch(err => {
            console.log(err)
        })
    } 

    static login(req, res){
        res.sendFile(path.resolve(__dirname, "../views/login/login.html"))
    }

    static error(req, res){
        res.sendFile(path.resolve(__dirname, "../views/erro/erro.html"))
    }
}

module.exports = PublicController