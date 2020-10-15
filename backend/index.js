//modulos importados
require("dotenv").config()

const express = require("express") //módulo de rotas 
const http = require("http") //protocolo 
const socketio = require("socket.io") //web socket -> chat 
const flash = require("express-flash") //responses que só duram uma request


//funções importadas

const formatMessage = require("./chat/messages")

//inicialização
const app = express()
const server = http.createServer(app)
const io = socketio(server)

//executa quando um usuário conecta
io.on('connection', socket =>{
    socket.on("joinRoom", room => {
        socket.join(room)
    })
    socket.on("message", message => {
        io.emit("chat-message",  formatMessage(message.fullname, message.msg))
    })
})

//importação das rotas
const routes = require("./routes/rotas")
app.use("/", routes)

//configuração body-parser - ajuda a pegar parametros na requisição
app.use(flash()) //usando o express-flash como middleware

//inicialização do "servidor" na porta 3000
server.listen(3000, () => {
    console.log("server running")
})