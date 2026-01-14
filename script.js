const album = [
    { foto: "foto1.jpg", msj: "Nuestro primer día juntos ❤️", fecha: "2024-01-01" },
    { foto: "foto2.jpg", msj: "Me encanta tu sonrisa", fecha: "2026-01-14" }
];

let indice = 0;

function abrirCarta() {
    // 1. Cargamos la primera foto y el mensaje
    document.getElementById('polaroid').src = album[0].foto;
    document.getElementById('texto-trasero').innerText = album[0].msj;
    
    // 2. Ocultamos el título y el sobre (ID inicio)
    const inicio = document.getElementById('inicio');
    if (inicio) inicio.classList.add('hidden');
    
    // 3. Mostramos la foto (ID photo-container)
    const photoContainer = document.getElementById('photo-container');
    if (photoContainer) {
        photoContainer.classList.remove('hidden');
        photoContainer.style.display = 'flex';
        photoContainer.style.flexDirection = 'column';
        photoContainer.style.alignItems = 'center';
    }
    
    // 4. Reproducimos tu archivo musica.mp3
    const cancion = document.getElementById('musica');
    if (cancion) cancion.play().catch(e => console.log("Error al reproducir música"));
}

function voltearTarjeta() {
    document.getElementById('card-inner').classList.toggle('flipped');
    document.getElementById('btn-siguiente').style.display = "block";
}

// ... resto de las funciones cambiarFoto()


function cambiarFoto() {
    const ahora = new Date();
    const fechaFoto = new Date(album[indice + 1]?.fecha);

    if (indice >= album.length - 1) {
        alert("¡No hay más fotos por ahora! Vuelve mañana.");
        return;
    }

    if (ahora >= fechaFoto) {
        indice++;
        document.getElementById('card-inner').classList.remove('flipped');
        setTimeout(() => {
            document.getElementById('polaroid').src = album[indice].foto;
            document.getElementById('texto-trasero').innerText = album[indice].msj;
            document.getElementById('btn-siguiente').style.display = "none";
        }, 400);
    } else {
        alert("Esta foto se desbloquea el: " + album[indice + 1].fecha);
    }
}

