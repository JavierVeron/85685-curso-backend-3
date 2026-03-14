import express from "express"
import compression from "express-compression"
import userRouter from "./routes/user.router.js";
import ErrorHandler from "./middlewares/errors/index.js"

const app = express();
const port = 8080;

app.listen(port, () => {
    console.log("Servidor activo:", port);  
})

app.use(express.json());

app.use(compression({
    brotli:{
        enabled:true,
        zlib:{}
    }
}));

app.get("/", (req, res) => {
    let texto = "";

    for (let i=0; i<100000; i++) {
        texto += "NO VAMOS A GANAR EL MUNDIAL!<BR>";
    }

    texto += "VAMOS A DEFENDERLO!";
    res.send(texto);
})

app.use(ErrorHandler);
app.use("/api/users", userRouter);