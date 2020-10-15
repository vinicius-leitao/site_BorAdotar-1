//importação de modulos
require('dotenv').config()
const jwt = require("jsonwebtoken")


//importação de funções
const spliter = require("./scripts/tokenSplt")

function auth(req, res, next){
    if(req.headers.cookie != undefined){
        const authToken = spliter(req.headers.cookie) //pega o token que é passado pelo headers
        jwt.verify(authToken, process.env.JWT_AUTHENTICATION, (err, data) => { //descriptografia e tratamento da função assincrona
            if(err){
                res
                    .status(401)
                    .redirect("/login")
            } else {
                res.append("user", JSON.stringify(data))
                next()
            }
        })
    } else {
        res
            .redirect("/login")
    }
}

module.exports = auth