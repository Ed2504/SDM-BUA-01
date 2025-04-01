const express = require("express")
const app = express()

app.use(express.json())

let usuarios = []
let pedidos = []

// Rota para cadastrar usuários

app.post("/usuarios", (req, res) => {
    const usuario = req.body;
    usuarios.push(usuario)
    res.send({message: "Usuario cadastrado com sucesso", usuario})
})

// Rota para cadastrar pedidos

app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido)
    res.send({message: "Pedido criado", pedido})
})

// app.get("/dados", (req, res) =>{
//     res.send({usuarios})
// })

app.get("/dados", (req, res) =>{
    res.send({pedidos, usuarios})
})


app.listen(3000, () => console.log("Servidor monolítico ok, na porta 3000"))