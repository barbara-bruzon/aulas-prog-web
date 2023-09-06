import { DataSource } from "typeorm";
import dotenv from "dotenv"
import { dot } from "node:test/reporters";

dotenv.config() //carrega as variáveis de ambiente do arquivo

const dataBase = new DataSource({
    type: 'sqlite',
    database: process.env.DATABASE || './db.sqlite',
    entities: [
        './src/models/*.ts' //mais comum ser usado entities
    ],
    logging: true, //mostrar no terminal
    synchronize: true
})

// Promises
dataBase.initialize()
    .then(() => {
        console.log("Banco conectado com sucesso")
    })
    .catch((erro) => {
        console.log("Erro ao conectar o banco!", erro)
    })

export default dataBase