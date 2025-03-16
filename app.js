// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    console.log(nombre);
    console.log(amigos);

    if (nombre === "") {
        alert("Por favor ,ingrese un nombre");
        input.value = "";
    } else if (amigos.includes(nombre)) {
        alert(`El nombre ${nombre} ya esta en al lista`)
        input.value = "";
    } else {
        amigos.push(nombre);
        actualizarListaAmigos();
        input.value = "";
    }

}

function actualizarListaAmigos() {

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo(){

    if(amigos.length === 0){
        document.getElementById("resultado").innerHTML = "No hay amigos para sortear";
    }
    const sorteo = Math.floor(Math.random()*amigos.length);
    amigoSorteado = amigos[sorteo];
    document.getElementById("resultado").innerHTML = `"El amigo secreto es ${amigoSorteado}"`;

}




