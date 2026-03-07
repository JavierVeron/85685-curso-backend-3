// Definimos una Operación
/* export const operacionCompleta = () => {
    let total = 0;

    for (let i=0; i<10000000000; i++) {
        total += i;
    }

    return total;
} */

process.on("message", resultado => {
    let total = 0;

    for (let i=0; i<100000000; i++) {
        total += i;
    }

    process.send(total);
})