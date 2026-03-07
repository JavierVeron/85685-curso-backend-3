//import process from "process"
import {Command} from "commander"

// node process.js a b c
//console.log(process.argv.slice(2));

const miPrograma = new Command();
miPrograma.option("-d", "Debug", false);
miPrograma.option("-p <port>", "Puerto", 3000);
miPrograma.option("--mode <mode>", "Modo", "desarrollo");
miPrograma.requiredOption("-u <user>", "Usuario", "No se ha definido el Usuario!");
miPrograma.parse();

console.log("Opciones:", miPrograma.opts());
console.log("Opciones Restantes:", miPrograma.args);