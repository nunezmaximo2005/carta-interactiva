const album = [
    { foto: "foto1.jpg", msj: "Nuestro primer día juntos ❤️", fecha: "2026-01-13" },
    { foto: "foto2.jpg", msj: "Me encanta tu sonrisa", fecha: "2026-01-14" },
    { foto: "foto3.jpg", msj: "Eres lo mejor que me ha pasado", fecha: "2026-01-15" }
];

let indice = 0;

function voltearTarjeta() {
    document.getElementById('card-inner').classList.toggle('flipped');
    // Mostramos el botón "siguiente" solo después de que vea el mensaje
    document.getElementById('btn-siguiente').style.display = "block";
}

function cambiarFoto() {
    const ahora = new Date();
    const fechaFoto = new Date(album[indice + 1]?.fecha);

    // Si no hay más fotos
    if (indice >= album.length - 1) {
        alert("¡No hay más fotos por ahora! Vuelve mañana.");
        return;
    }

    // Lógica de desbloqueo por fecha
    if (ahora >= fechaFoto) {
        indice++;
        document.getElementById('card-inner').classList.remove('flipped');
        
        // Esperamos un poco a que la tarjeta se enderece para cambiar el contenido
        setTimeout(() => {
            document.getElementById('polaroid').src = album[indice].foto;
            document.getElementById('texto-trasero').innerText = album[indice].msj;
            document.getElementById('btn-siguiente').style.display = "none";
        }, 400);
    } else {
        alert("Esta foto se desbloquea el: " + album[indice + 1].fecha);
    }
}

function abrirCarta() {
    // Inicializar la primera foto y el mensaje
    document.getElementById('polaroid').src = album[0].foto;
    document.getElementById('texto-trasero').innerText = album[0].msj;
    
    // Ocultamos el título y el sobre
    document.getElementById('main-container').classList.add('hidden');
    
    // Mostramos las fotos
    document.getElementById('photo-container').classList.remove('hidden');
    
    // Reproducir música (asegúrate de tener el archivo cancion.mp3)
    document.getElementById('musica').play();
});
    document.getElementById('musica').play();

}
