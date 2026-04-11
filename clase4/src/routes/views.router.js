import { Router } from "express"

const viewsRouter = Router();

viewsRouter.get("/", (req, res) => {
    res.render("index")
})

viewsRouter.get("/register", (req, res) => {
    res.render("register")
})

export default viewsRouter