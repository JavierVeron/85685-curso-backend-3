export const UserErrorInfo = (user) => {
    return `Una de las propiedades posee un error:
    
    * Nombre (string) => ${user.nombre}
    * Email (string) => ${user.email}
    * Edad (number) => ${user.edad}`
}