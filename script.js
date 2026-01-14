const album = [
    { foto: "foto1.jpg", msj: "Nuestro primer día juntos ❤️", fecha: "2026-01-13" },
    { foto: "foto2.jpg", msj: "Me encanta tu sonrisa", fecha: "2026-01-14" },
    { foto: "foto3.jpg", msj: "Eres lo mejor que me ha pasado", fecha: "2026-01-15" }
];

let indice = 0;

function abrirCarta() {
    // 1. Inicializar datos
    document.getElementById('polaroid').src = album[0].foto;
    document.getElementById('texto-trasero').innerText = album[0].msj;
    
    // 2. Ocultar el inicio y mostrar fotos
    document.getElementById('inicio').classList.add('hidden');
    const photoContainer = document.getElementById('photo-container');
    photoContainer.classList.remove('hidden');
    photoContainer.classList.add('show-flex'); // Nueva clase para centrar
    
    // 3. Música
    const musica = document.getElementById('musica');
    if(musica) musica.play();
}

function voltearTarjeta() {
    document.getElementById('card-inner').classList.toggle('flipped');
    document.getElementById('btn-siguiente').style.display = "block";
}

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

