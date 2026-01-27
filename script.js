const album = [
    { foto: "fotos/foto1.jpg", msj: "Sinceramente no sabía qué foto poner primero, pero creo que esta es una de las primeras que nos sacamos. Bastante otaku para mi gusto pero, aunque mi cara diga otra cosa, me gustó mucho, hasta la puse de perfil en WhatsApp. Te prometo que las próximas son mejores. Te amo Shirley.", fecha: "2026/01/16" },
    { foto: "fotos/foto2.jpg", msj: "No me acuerdo del todo el problema que hubo con la cajera del Día (creo que tuvo que ver con un 3x2 o algo parecido), pero sí me acuerdo que me dio mucha risa. Esta no es de mis favoritas, pero sí es muy linda. Qué lástima no tener más la pulsera (todavía me acuerdo el día que se rompió, volaron todas las pelotitas a la mierda), y qué bueno que hayas sacado la foto.", fecha: "2026/01/17" },
    { foto: "fotos/foto3.jpg", msj: "Probablemente no me hubiera sacado esta foto con nadie más. Cuando la subiste a tu estado me gustó mucho, más allá de que te hayas burlado de lo que mi mamá decía de la foto donde tenía los labios rojos \"mmmm pareces putísimo\". Esta si es de mis favoritas. Te amo mucho preciosa ❤️, y espero que estés teniendo una linda noche.", fecha: "2026/01/18" },
    { foto: "fotos/foto4.jpg", msj: "Esta foto creo que es de cuando volviamos de lo de Julia. Ahí se ve el piercing de la ceja pero el que más me gustaba era el del labio (tus labios me gustan mucho). En esa época vivías cerca y tomábamos tereré a cada rato. La noche de hoy está para hablar de cualquier cosa y tomar tereré hasta que te estés re meando. Te extraño mucho Shirley, quiero tenerte cerca, hablar mientras veo los hermosos ojos que tenés, ver películas juntos, quiero todo junto a vos. Te amo y te extraño mucho mucho", fecha: "2026/01/19" },
    { foto: "fotos/foto5.jpg", msj: "Estoy subiendo medio tarde esto (me dormí), la salida de ayer me gustó muchísimo y me hubiera gustado quedarme mucho más. Al menos ayer pudimos comer las hamburguesas sin ensuciarnos tanto como en la foto. La canción de hoy la escuchaba todo contento casi siempre antes de salir. Medio pedorro el mensaje de hoy pero bueno. Te amo mucho Shirley, y espero poder verte de vuelta.", fecha: "2026/01/20" },
    { foto: "fotos/foto6.jpg", msj: "Me encanta lo sonriente que salís en la foto y el cómo te miro, no entiendo qué hago de brazos cruzados, te tendría que haber agarrado de la cintura. Hablando de eso, creo que nos abrazamos cerca de la escalera ese día, no estoy seguro, estaba medio en pedo. Es raro que Gonza sonría en las fotos, ahora siempre sale serio (le debe sumar aura). Hay más cosas, pero si escribo más se salen del recuadro. Te amo preciosa, y espero que vengas bien con el estudio.", fecha: "2026/01/21" },
    { foto: "fotos/foto7.jpg", msj: "Nunca me llamaron mucho la atención las convenciones, me gustaba el anime, pero nunca lo suficiente como para comprar algo relacionado o ir a ver gente disfrazada. Probablemente ese día me gustó ir porque ibas vos, siempre que estás vos la suelo pasar bien. Hoy extraño mucho tu risa, y me arrepiento de no haberte dicho que te amo la vez que te vi, al menos al despedirme. Creo que siempre siento que podría dar algo más, mostrarte más lo mucho que te amo.", fecha: "2026/01/22" },
    { foto: "fotos/foto8.jpg", msj: "La flor esta es rarísima y su nombre también (Passiflora caerulea), no hay mucho para decir de la foto, pero siempre me gustó que me dieras cosas, porque significa que pensaste en mí, como la vez que me diste esa flor con una perla. Espero que no estés tan estresada con el estudio, es bastante feo llorar porque no te sale algo, de igual forma sé que sos muy inteligente y perseverante, unos aspectos que admiro mucho. Estoy seguro de que vas a aprobar. Te amo Shirley", fecha: "2026/01/23" },
    { foto: "fotos/foto9.jpg", msj: "Más de una vez pensé en estar así como en la foto: despertarme y verte hasta el momento en que me duermo, compartir un espacio, construir ese espacio juntos, vivir experiencias juntos. Experiencias que podría hacer solo, pero que sé que con una tan buena compañera como vos serían mejores. Te extraño Shirley, extraño esos mensajes que llegaban de la nada a sacarme una sonrisa, que me cuentes tu dia, que te quejes del calor que hace o contarnos chisme de Gonza y Cami, que me recomiendes películas que espero en algún momento ver, y el mensaje de buenas noches que siempre quiero alargar para hablar un rato más. Extraño decirte que te amo, creo que se volvió algo necesario para mí. Supongo que hoy vas a estar muy cansada, espero que puedas descansar bien y no te despiertes con dolor en el cuerpo o alguna molestia. Buenas noches Shirley, te amo mucho.", fecha: "2026/01/24" },
    { foto: "fotos/foto10.jpg", msj: "Todavía no sé cómo no me decías lo mal que me quedaba el corte de pelo, y esas cejas que me hacían parecer un dibujito. Ese fue el día que conocí a tu mamá y fue uno de mis días favoritos, ese día también quedamos en vernos el 14 de febrero (algo que por alguna razón significaba mucho para mí). Me hubiera gustado quedarme a comer ese día, ni me acuerdo porqué me volví. También me acuerdo que después de volver a mi casa me mandaste para jugar al Free Fire, estabas muy viciada a ese juego y todavía me acuerdo cuando me dijiste: 'Jugás muy lindo'. Dejando eso de lado, espero que las cosas vuelvan a ser como antes. Extraño mucho hablar con vos, saber cómo estás, decirte cosas cursis. No sé, creo que a este punto me gustaría recibir cualquier mensaje (hasta llegué a soñar que me llegaban unos). Te amo Shirley, y te extraño cada vez más.", fecha: "2026/01/25" },
    { foto: "fotos/foto11.jpg", msj: "Esta foto es de cuando fuimos al cine a ver La Monja (una porquería de película, si me preguntás). Me gusta mucho cómo tenés el pelo en esta foto, no sé, tu cara se ve más despejada. También hay un video donde hacés caras, todas hermosas. Anoche la pasé muy bien, se me pasó muy rápido todo, aunque no fue tan graciosa como la de la otra vez (capaz me gusta más que te rías por lo que digo y no por reventarme con un cartel). La verdad no sé qué escribir, creo que me sale mejor escribir de noche. Quería abrazarte antes de irme, pero creo que para esas cosas siempre me va a costar tomar la iniciativa (creo que es más que nada por miedo a sentirme rechazado). Al menos esta vez sí te dije que te amo. Te amo mucho mucho y la paso muy bien con vos (te me estás haciendo muy tierna ultimamente). ❤️TRATÁ DE NO TIRARTE DE UN BALCÓN❤️.", fecha: "2026/01/26" },
    { foto: "fotos/foto12.jpg", msj: "Me encanta cómo nos dio el sol en la foto, hasta parece un filtro de Instagram. Esta está dentro de mis favoritas, creo que la mayoría de las que puse de perfil lo están. Me gusta mucho el contraste del rojo-naranja con el celeste del fondo, pero lo que más me gusta es que estés ahí. Creo que no fue el día que nos sacamos la foto, pero me hace acordar al día que me quedé atrás en las carpas y te perdí de vista, o a la vez que dijiste que podías saber si una chica era lesbiana solo con verla. Shirley, me encantan tus ojos, no me los puedo sacar de la cabeza, me encanta cómo se mueven cuando hablás, cómo brillan de noche, me encanta verlos muy cerca cuando nos abrazamos (como que medio se deforman) y me encantan las caras que hacés cuando te digo lo linda que sos. Además, estás diciendo cosas muy tiernas últimamente, lo que el otro día casi me hace llorar (tengo que cuidar que no vuelva a pasar). Perdón, capaz me pasé con lo de los ojos, pero bueno. Gracias por enseñarme a andar en bici. Te amo mucho Shirley, y espero que nunca más sueñes con el colorado ese porque vos sos una forra y él también.", fecha: "2026/01/27" },
    { foto: "fotos/foto13.jpg", msj: "", fecha: "2026/01/28" },
    { foto: "fotos/foto14.jpg", msj: "", fecha: "2026/01/29" },


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





















