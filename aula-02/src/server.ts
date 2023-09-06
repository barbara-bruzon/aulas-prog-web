import express from 'express'
import dotenv from 'dotenv'
import dataBase from './database/ormconfig'


dotenv.config()
const app = express()
// O último parâmetro substitui caso não exista a variável
const port = process.env.PORT || 3000 

//  Get espera quando o endpoint (caminho, a url)
//  req (requisição) para pegar o que foi passado e res (resposta) para responder
// app.get('/',(req,res) => {
//     console.log(req)
//     res.send("Olá mundo")
// })
// app.get('/user', (req,res) => {
//     res.send({id:1, name:"teste"})
// })

// Parâmetros: porta e uma arrow function (função de callback, que não é reutilizada novamente)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
    console.log("Banco de dados: ", dataBase.isInitialized ? 'Iniciado' : 'não iniciado')
})