const album = [
    { foto: "foto1.jpg", msj: "Nuestro primer día juntos ❤️", fecha: "2026-01-14" },
    { foto: "foto2.jpg", msj: "Me encanta tu sonrisa", fecha: "2026-01-15" },
    { foto: "foto3.jpg", msj: "Eres lo mejor que me ha pasado", fecha: "2026-01-16" }
];

let indice = 0;

document.addEventListener("DOMContentLoaded", actualizarAlbumVisual);

function abrirCarta() {
    indice = 0; 
    actualizarContenidoTarjeta(); // Llamamos a la función que pone la foto y el número
    
    document.getElementById('inicio').classList.add('hidden');
    const pc = document.getElementById('photo-container');
    pc.style.display = 'flex';
    pc.classList.remove('hidden');

    const musica = document.getElementById('musica');
    if(musica) musica.play().catch(() => console.log("Clic necesario para música"));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function voltearTarjeta() {
    document.getElementById('card-inner').classList.toggle('flipped');
    if (indice < album.length - 1) {
        document.getElementById('btn-siguiente').style.display = "block";
    }
}

function cambiarFoto() {
    const ahora = new Date();
    const proximo = indice + 1;

    if (proximo >= album.length) {
        alert("¡Has llegado al final de las fotos disponibles!");
        return;
    }

    const fechaDisponible = new Date(album[proximo].fecha);

    if (ahora >= fechaDisponible) {
        let vistas = JSON.parse(localStorage.getItem("fotosVistas") || "[0]");
        if (!vistas.includes(proximo)) vistas.push(proximo);
        localStorage.setItem("fotosVistas", JSON.stringify(vistas));

        indice = proximo;
        document.getElementById('card-inner').classList.remove('flipped');
        
        setTimeout(() => {
            actualizarContenidoTarjeta(); // Actualiza foto y número
            document.getElementById('btn-siguiente').style.display = "none";
            actualizarAlbumVisual();
        }, 400);
    } else {
        alert("Esta foto se desbloquea el: " + album[proximo].fecha);
    }
}

// ESTA ES LA FUNCIÓN QUE PONE EL NÚMERO (#1, #2, etc.)
function actualizarContenidoTarjeta() {
    document.getElementById('polaroid').src = album[indice].foto;
    document.getElementById('texto-trasero').innerText = album[indice].msj;
    
    // Aquí es donde sucede la magia del número
    const nFotoElemento = document.getElementById('n-foto');
    if (nFotoElemento) {
        nFotoElemento.innerText = "#" + (indice + 1);
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
        img.onclick = () => {
            indice = i;
            document.getElementById('card-inner').classList.remove('flipped');
            setTimeout(() => {
                actualizarContenidoTarjeta();
                document.getElementById('btn-siguiente').style.display = "none";
            }, 400);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        lista.appendChild(img);
    });
}
