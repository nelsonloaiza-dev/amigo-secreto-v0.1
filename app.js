let amigosSecretos = []

function agregarAmigo() {

    //Almacenamos el valor en la variable 'nombre' que el usuario digite en el input con el id 'amigo'.
    let nombre = document.getElementById('amigo').value;

        //Si envia el 'input' vacio le saltara un 'alert' para que lo corrija.
        if (nombre.trim() === '') {
            alert('Por favor, inserte un nombre.');
            return;
        }
        
        amigosSecretos.push(nombre);
        document.getElementById('amigo').value = '';

        mostrarLista();
}

function mostrarLista() {
            // 1. Obtener el elemento UL donde mostraremos los amigos
            let lista = document.getElementById('listaAmigos');
            
            // 2. Limpiar el contenido anterior
            lista.innerHTML = '';

            // 3. Recorrer el arreglo amigosSecretos
            for (let i = 0; i < amigosSecretos.length; i++) {

            // 4. Agregar cada amigo como un <li>
            lista.innerHTML += '<li>' + amigosSecretos[i] + '</li>';
            }
}

function validarAmigo() {

    //Validar que haya amigos disponibles
    if (amigosSecretos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    } 
    
}

console.log(mostrarLista);
console.log(agregarAmigo);
console.log(amigosSecretos);