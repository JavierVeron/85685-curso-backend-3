import { Router } from "express"
import { usersModels } from "../models/user.model.js";

const usersRouter = Router();
const users = [
    {id:1, nombre:"Javier Verón", email:"javier.veron@gmail.com", edad:44},
    {id:2, nombre:"Juan Perez", email:"juan.perez@gmail.com", edad:25}
];

usersRouter.get("/", async (req, res) => {
    /* const users = await usersModels.find();
    console.log(users); */
    res.send(users)
})

usersRouter.post("/create", (req, res) => {
    const {nombre, email, edad} = req.body;
    const newUser = {id:(users.length+1),nombre, email, edad};

    if (users.push(newUser)) {
        res.send({status:"ok", message:"El Usuario se ha agregado correctamente!"});
    } else {
        res.status(400).send({status:"error", message:"El usuario no pudo ser agregado!"});
    }
})

export default usersRouter