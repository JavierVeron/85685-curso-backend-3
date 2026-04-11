const getUsers = async () => {
    const response = await fetch("http://localhost:8080/api/users");
    const data = await response.json();
    const contenido = document.getElementById("contenido");
    let contenidoHTML = `<ul class="list-group">`;

    data.forEach(item => {
        contenidoHTML += `<li class="list-group-item">${item.nombre} (${item.edad}) => ${item.email}</li>`;
    });

    contenidoHTML += `</ul>`;
    contenido.innerHTML = contenidoHTML;
}

getUsers();