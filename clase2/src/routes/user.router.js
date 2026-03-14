import Router from "express"
import CustomError from "../services/errors/CustomError.js"
import EnumsErrors from "../services/errors/EnumsErrors.js"
import {UserErrorInfo} from "../services/errors/UserErrorInfo.js"

const userRouter = Router();
const users = [
    {nombre:"Adrian Satriani", email:"adri.satri@gmail.com", edad:23}
];

userRouter.get("/", (req, res) => {
    res.send(users);
})

userRouter.post("/", (req, res) => {
    const {nombre, email, edad} = req.body;

    if (!nombre || !email || !edad) {        
        CustomError.createError({
            name:"Faltan datos!",
            cause:UserErrorInfo({nombre, email, edad}),
            message:"Error en el Post!",
            code:EnumsErrors.INVALID_TYPES
        })
    }

    const newUser = {nombre, email, edad};
    users.push(newUser);

    res.send(users);
})

export default userRouter