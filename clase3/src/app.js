import express from "express"
import fs from "fs"
import { addLogger } from "./utils/logger.js";

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("Servidor activo:", port);  
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(addLogger);

app.get("/", (req, res) => {
    let texto = "Coderhouse - Programación Backend III";
    res.send(texto);
})

app.get("/login", (req, res) => {
    let texto = "El Usuario quiere inicar la sesión!";
    req.logger.info(texto);
    res.send(texto);
})

app.get("/errors", (req, res) => {
    const contenido = fs.readFileSync("errors.log", "utf-8");
    //console.log(contenido);
    res.send(contenido);
})

app.get("/logout", (req, res) => {
    let texto = "El Usuario cerró la sesión!";
    req.logger.info(texto);
    res.send(texto);
})

app.get("/admin", (req, res) => {
    let texto = "Contenido Exclusivo";
    req.logger.warning(texto);
    res.send(texto);
})

app.get("/operacion_simple", (req, res) => {
    let resultado = 0;

    for (let i=0; i<10000; i++) {
        resultado += i;
    }

    res.send({resultado});
})

app.get("/operacion_compleja", (req, res) => {
    let resultado = 0;

    for (let i=0; i<1000000; i++) {
        resultado += i;
    }

    res.send({resultado});
})
