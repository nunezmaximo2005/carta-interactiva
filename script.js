const album = [
    { foto: "fotos/foto1.jpg", msj: "Sinceramente no sabía qué foto poner primero, pero creo que esta es una de las primeras que nos sacamos. Bastante otaku para mi gusto pero, aunque mi cara diga otra cosa, me gustó mucho, hasta la puse de perfil en WhatsApp. Te prometo que las próximas son mejores. Te amo Shirley.", fecha: "2026/01/16" },
    { foto: "fotos/foto2.jpg", msj: "No me acuerdo del todo el problema que hubo con la cajera del Día (creo que tuvo que ver con un 3x2 o algo parecido), pero sí me acuerdo que me dio mucha risa. Esta no es de mis favoritas, pero sí es muy linda. Qué lástima no tener más la pulsera (todavía me acuerdo el día que se rompió, volaron todas las pelotitas a la mierda), y qué bueno que hayas sacado la foto.", fecha: "2026/01/17" },
    { foto: "fotos/foto3.jpg", msj: "Probablemente no me hubiera sacado esta foto con nadie más. Cuando la subiste a tu estado me gustó mucho, más allá de que te hayas burlado de lo que mi mamá decía de la foto donde tenía los labios rojos \"mmmm pareces putísimo\". Esta si es de mis favoritas. Te amo mucho preciosa ❤️, y espero que estés teniendo una linda noche.", fecha: "2026/01/18" },
    { foto: "fotos/foto4.jpg", msj: "Esta foto creo que es de cuando volviamos de lo de Julia. Ahí se ve el piercing de la ceja pero el que más me gustaba era el del labio (tus labios me gustan mucho). En esa época vivías cerca y tomábamos tereré a cada rato. La noche de hoy está para hablar de cualquier cosa y tomar tereré hasta que te estés re meando. Te extraño mucho Shirley, quiero tenerte cerca, hablar mientras veo los hermosos ojos que tenés, ver películas juntos, quiero todo junto a vos. Te amo y te extraño mucho mucho", fecha: "2026/01/19" },
    { foto: "fotos/foto5.jpg", msj: "Estoy subiendo medio tarde esto (me dormí), la salida de ayer me gustó muchísimo y me hubiera gustado quedarme mucho más. Al menos ayer pudimos comer las hamburguesas sin ensuciarnos tanto como en la foto. La canción de hoy la escuchaba todo contento casi siempre antes de salir. Medio pedorro el mensaje de hoy pero bueno. Te amo mucho Shirley, y espero poder verte de vuelta.", fecha: "2026/01/20" },
    { foto: "fotos/foto6.jpg", msj: "Me encanta lo sonriente que salís en la foto y el cómo te miro, no entiendo qué hago de brazos cruzados, te tendría que haber agarrado de la cintura. Hablando de eso, creo que nos abrazamos cerca de la escalera ese día, no estoy seguro, estaba medio en pedo. Es raro que Gonza sonría en las fotos, ahora siempre sale serio (le debe sumar aura). Hay más cosas, pero si escribo más se salen del recuadro. Te amo preciosa, y espero que vengas bien con el estudio.", fecha: "2026/01/21" },
    { foto: "fotos/foto7.jpg", msj: "Nunca me llamaron mucho la atención las convenciones, me gustaba el anime, pero nunca lo suficiente como para comprar algo relacionado o ir a ver gente disfrazada. Probablemente ese día me gustó ir porque ibas vos, siempre que estás vos la suelo pasar bien. Me preocupa que hayas sacado la foto de WhatsApp, solo espero que no estés triste o hayas tenido un mal día. Hoy extraño mucho tu risa, me encanta hacerte reír tanto que tengas que dejar de caminar para parar, y me arrepiento de no haberte dicho que te amo la vez que te vi, al menos al momento de despedirme. Creo que siempre siento que podría dar algo más, mostrarte más lo mucho que te amo.", fecha: "2026/01/21" },
    { foto: "fotos/foto8.jpg", msj: "Nunca me llamaron mucho la atención las convenciones, me gustaba el anime, pero nunca lo suficiente como para comprar algo relacionado o ir a ver gente disfrazada. Probablemente ese día me gustó ir porque ibas vos, siempre que estás vos la suelo pasar bien. Me preocupa que hayas sacado la foto de WhatsApp, solo espero que no estés triste o hayas tenido un mal día. Hoy extraño mucho tu risa, me encanta hacerte reír tanto que tengas que dejar de caminar para parar, y me arrepiento de no haberte dicho que te amo la vez que te vi, al menos al momento de despedirme. Creo que siempre siento que podría dar algo más, mostrarte más lo mucho que te amo.", fecha: "2026/01/23" },


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













