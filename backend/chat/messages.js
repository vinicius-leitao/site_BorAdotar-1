const moment = require('moment') //transformando as mensagens (strings) em objetos

function formatMessage(username, text){
    return{
        username,
        text,
        time: moment().format('h:mm a')
    }
}
module.exports = formatMessage