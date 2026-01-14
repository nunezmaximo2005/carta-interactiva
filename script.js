const album = [
    { foto: "foto1.jpg", msj: "Nuestro primer día juntos ❤️", fecha: "2026-01-14" },
    { foto: "foto2.jpg", msj: "Me encanta tu sonrisa", fecha: "2026-01-15" }
];

let indice = 0;

document.addEventListener("DOMContentLoaded", actualizarAlbumVisual);

function abrirCarta() {
    indice = 0; // Reinicia a la primera foto al tocar el sobre
    document.getElementById('polaroid').src = album[indice].foto;
    document.getElementById('texto-trasero').innerText = album[indice].msj;
    document.getElementById('card-inner').classList.remove('flipped');
    
    document.getElementById('inicio').classList.add('hidden');
    const pc = document.getElementById('photo-container');
    pc.style.display = 'flex';
    pc.classList.remove('hidden');

    document.getElementById('musica').play();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltearTarjeta() {
    document.getElementById('card-inner').classList.toggle('flipped');
    // Solo muestra "Siguiente" si no es la última foto vista
    document.getElementById('btn-siguiente').style.display = "block";
}

function actualizarAlbumVisual() {
    const lista = document.getElementById('lista-fotos');
    if (!lista) return;
    let vistas = JSON.parse(localStorage.getItem("fotosVistas") || "[0]");
    lista.innerHTML = "";
    
    vistas.forEach(i => {
        const img = document.createElement('img');
        img.src = album[i].foto;
        img.classList.add("miniatura-album");
        img.onclick = () => {
            indice = i;
            document.getElementById('card-inner').classList.remove('flipped');
            setTimeout(() => {
                document.getElementById('polaroid').src = album[i].foto;
                document.getElementById('texto-trasero').innerText = album[i].msj;
                document.getElementById('btn-siguiente').style.display = "none";
            }, 400);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        lista.appendChild(img);
    });
}
