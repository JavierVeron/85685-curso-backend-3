import express from "express"
import config from "../config.js"
import fork from "child_process"
//import { operacionCompleta } from "./operacionCompleja.js"

const app = express();
//const port = 8080;

app.listen(config.port, () => {
    console.log(config.nombreAPP);
    console.log("Servidor activo:", config.port);
})

app.get("/", (req, res) => {
    res.send("Hola Mundo #1!");
})

// Definimos los Listeners
process.on("exit", codigo => {
    console.log("Programa finalizado!");
})

process.on("uncaughtException", error => {
    //console.log("Excepcion encontrada!");
    //console.log(error);
    //console.log(process.cwd());
    //console.log(process.pid);
    //console.log(process.env);
    //console.log(process.argv);
    //console.log(process.version);
    process.exit(process.pid); // Matar o detener la ejecución de nuestro proceso
})

process.on("message", message => {
    console.log(message);
})

//dormir();
app.get("/suma", (req, res) => {
    /* const resultado = operacionCompleta();

    res.send({reesultado:resultado}); */
   
    const child = fork("operacionesCompleja.js");
    child.send("Inicio del proceso...");
    child.on("message", resultado => {
        res.send({resultado:resultado})
    })
});