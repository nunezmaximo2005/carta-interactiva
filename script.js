const album = [
    { foto: "foto1.jpg", msj: "Nuestro primer día juntos ❤️", fecha: "2026-01-13" },
    { foto: "foto2.jpg", msj: "Me encanta tu sonrisa", fecha: "2026-01-14" },
    { foto: "foto3.jpg", msj: "Eres lo mejor que me ha pasado", fecha: "2026-01-15" }
];

// Al cargar la página, revisamos qué fotos ya fueron vistas anteriormente
document.addEventListener("DOMContentLoaded", () => {
    actualizarAlbumVisual();
});

function cambiarFoto() {
    const ahora = new Date();
    const proximoIndice = indice + 1;

    if (proximoIndice >= album.length) {
        alert("¡Has visto todas las fotos disponibles por ahora!");
        return;
    }

    const fechaFoto = new Date(album[proximoIndice].fecha);

    if (ahora >= fechaFoto) {
        // Guardamos en la memoria del navegador que esta foto ya se vio
        let vistas = JSON.parse(localStorage.getItem("fotosVistas") || "[0]");
        if (!vistas.includes(proximoIndice)) {
            vistas.push(proximoIndice);
            localStorage.setItem("fotosVistas", JSON.stringify(vistas));
        }

        indice = proximoIndice;
        
        // Animación de cambio
        document.getElementById('card-inner').classList.remove('flipped');
        setTimeout(() => {
            document.getElementById('polaroid').src = album[indice].foto;
            document.getElementById('texto-trasero').innerText = album[indice].msj;
            document.getElementById('btn-siguiente').style.display = "none";
            actualizarAlbumVisual(); // Actualizamos la lista de abajo
        }, 400);
    } else {
        alert("Esta foto se desbloquea el: " + album[proximoIndice].fecha);
    }
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
        
        // ESTO ES LO NUEVO: Al tocar la miniatura, se carga en grande
        img.onclick = () => {
            indice = i; // Cambiamos al índice de la foto tocada
            document.getElementById('card-inner').classList.remove('flipped'); // La ponemos de frente
            
            setTimeout(() => {
                document.getElementById('polaroid').src = album[i].foto;
                document.getElementById('texto-trasero').innerText = album[i].msj;
                // Ocultamos el botón siguiente si es una foto vieja para no confundir
                document.getElementById('btn-siguiente').style.display = "none";
            }, 400);
            
            // Subir suavemente la pantalla para que vea la foto grande
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        lista.appendChild(img);
    });
}

