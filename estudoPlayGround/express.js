const express = require("express")

const app = express()

app.get("/", (req, res) => {res.send("Olá Mundo!")})
app.get("/contato", (req, res) => {
    res.send({
        nome: "Fernando",
        sobrenome: "Stentzler",
        idade: 28,
        altura: 1.96,
        desenvolvedor: true,
        progamador: true,
    })
})
app.post()
app.listen(3000, () => {console.log("Servidor Rodando na porta 3000")})