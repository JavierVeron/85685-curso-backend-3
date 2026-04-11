const createUser = async () => {
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const edad = document.getElementById("edad");

    const response = await fetch("http://localhost:8080/api/users/create", {
        method:"POST",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        body:JSON.stringify({
            nombre:nombre.value,
            email:email.value,
            edad:edad.value
        })
    });
    const data = await response.json();
    const contenido = document.getElementById("contenido");

    if (data.status == "ok") {
        contenido.innerHTML = `<div class="alert alert-success" role="alert">${data.message}`;
    } else {
        contenido.innerHTML = `<div class="alert alert-danger" role="alert">${data.message}`;
    }
    
    nombre.value = "";
    email.value = "";
    edad.value = "";
}