import dotenv from "dotenv"
import {Command} from "commander"

//const enviroment = "PRODUCCION"
const command = new Command;
command.option("--mode <mode>", "Modo", "desarrollo");
command.parse();

dotenv.config({
    //path:enviroment == "PRODUCCION" ? "produccion.env" : "desarrollo.env"
    path:command.opts().mode == "produccion" ? "produccion.env" : "desarrollo.env"
})

export default {
    nombreAPP:process.env.NOMBRE_APP,
    port:process.env.PORT
}