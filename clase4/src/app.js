import express from "express"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import viewsRouter from "./routes/views.router.js"
import usersRouter from "./routes/users.router.js"
import mongoose from "mongoose"

const app = express()
const port = 8080

app.listen(port, () => {
    console.log("Servidor activo: " + port);
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/", viewsRouter);
app.use("/api/users", usersRouter);
//mongoose.connect("mongodb+srv://javierveron:Javier123!@codercluster.d33hyf3.mongodb.net/?appName=CoderCluster");