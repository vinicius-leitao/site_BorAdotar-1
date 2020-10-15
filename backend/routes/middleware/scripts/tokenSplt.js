function tokenSplit(token){
    let newToken = `{${token.replace("=", `:"`).replace("=",`:"`).replace(";", " ,").replace("token", `"token"`).replace("io",`"io"`).replace(" ", `"`)}"}`
    token2 = JSON.parse(newToken)
    return token2.token
}

module.exports = tokenSplit