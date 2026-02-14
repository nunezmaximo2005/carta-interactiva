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
    { foto: "fotos/foto13.jpg", msj: "Creo que me importaba más verte a vos que a la cámara, siempre intentaba decir algo gracioso para que salgas riendo en la foto. Siempre ponías un montón de filtros de colores, hay algunas fotos donde estás pálida por los filtros de Instagram. No sé por qué estoy acostado arriba de mi campera y no te la di a vos, o la hubiera acomodado para que ninguna de nuestras cabezas toque el piso. Hoy me enteré de que no me tenés agendado, eso, junto con el archivado, son cosas que siempre me molestaron un poco. Digo, ¿por qué no agendarías a alguien que querés? Si querés decime exagerado, maricón o lo que vos quieras. Pensé en pedirte que me agendes por lo de la bici, pero creo que no me gustaría pedirlo. Que no se note que escribo esto justo después de enterarme, el que esté molesto no quita que te ame (y mucho), no pienso hacerme el loco contestando seco o no contestando. Creo que es porque te amo y no me gustaría que la pases mal, pero tampoco quiero dejar de comunicarlo. Yo también te extraño y quiero agarrarte de la cintura, acercarte y decirte que te amo para después darte un beso en la frente, porque sé que te gustan mucho (aunque tus labios me gustan muchísimo), darte besos rápidos para ir poco a poco haciéndolos más lentos, haciendo pausas para mirar tus ojos de cerca. Shirley, me dormiría acariciándote mientras te digo lo mucho que te amo (probablemente bastante embobado). Perdón, capaz me pasé un poco. Espero que duermas un montón y que por primera vez sueñes que te beso (y sin besar a alguien más que no sea yo, quiero ser solo para vos y que vos seas solo para mí).", fecha: "2026/01/28" },
    { foto: "fotos/foto14.jpg", msj: "Esta es mi favorita: me encanta cómo me mirás para ponerme el gorro. Ademas de lo preciosa que estás, dijiste que no te arreglaste el pelo, pero no me pareció necesario. Ese día fue tu mamá, nos dio esa corbata que dice \"Egresado\" que a día de hoy tengo guardada, ambos recibimos el título de Julia. Nos sacamos una foto todo el curso junto, aunque no éramos para nada unidos, hasta yo pude arreglar las cosas con Avril. Más tarde fuimos a la quinta donde ibas al baño a cada rato, estabas bastante en pedo, hasta me dijiste que era una lástima que te gusten las mujeres, lo cual era un rechazo para mí, pero lo sentí muy honesto y lindo de tu parte. \n Extraño la secundaria, pero es porque extraño poder verte todos los días. Hasta iba los días de lluvia para verte, creo que a veces me demoraba en ir porque me gustaba que me mandaras un mensaje como: \"¿donde pija estás?\" o \"¿cómo es que no estás acá?\", seguido de 80 stickers para hacerme sonar el celular. Extraño dejarte en la esquina, extraño despedirme sabiendo que te voy a ver mañana. Más de una vez volví contentísimo a mi casa porque el saludo con puño, por alguna razón, cambió por un abrazo. Extraño que te recuestes en mi hombro, extraño mirar reels juntos, extraño tener que copiar por turnos porque alguno de los dos no veía, extraño tener que llevar mi campera por vos, extraño tenerte conmigo todos los días. \n Sos la razón por la que amé la secundaria; fuiste la mejor compañera y me encantaba el como trabajabamos juntos, me hubiera gustado conocerte antes. Quién iba a pensar que todo iba a empezar con un \"sos un pelotudo\". Te amo mi amor, y espero en algún momento poder verte tan seguido como en esa época.", fecha: "2026/01/29" },
    { foto: "fotos/foto15.jpg", msj: "Esta foto es de cuando hicieron un cumple en la casa esa por la Plaza Italia. No tengo mucho que decir de la foto, ya que no estaba ahí, pero sí puedo decirte que siempre me gustó que mandaras fotos, a veces te sacabas varias y las mandabas, la mayoría haciendo caras raras, también había sonrisas y caras de culo. \n Creo que cuando mandaste esta te dije que tenías lindas manos, aunque siempre estaban frías, lo cual era bueno porque las mías estaban calientes, me gustaba que me toques para calentarte o que me sacaras puntos negros, porque te tenía más cerca. \n Bueno eso, amo tus manos, y en este momento me encantaría que me toques la cara mientras hablamos de cualquier cosa (creo que hablo más cuando me tocás porque me pongo nervioso). Te amo mucho Shirley. Extraño tu voz y tus quejas de los shorts cortos (estaría bueno ir a la playa para ver las caras que hacés, me resultan muy graciosas), aunque igual creo que si te veo no podría evitar abrazarte. Te extraño mucho mi amor, y por favor no te asustes si escuchás la alarma de la vecina o ruidos en el techo, puede que sea yo.", fecha: "2026/01/30" },
    { foto: "fotos/foto16.jpg", msj: "Todavía me acuerdo de este día, estaba nubladísimo y había muchísimo viento. Nos juntamos por el Día del Amigo, comimos salchipapa y creo que hasta nos subimos a uno de los juegos. Nunca me voy a olvidar que nos encontramos a un pariente de la esposa de mi papá y que me preguntó si eras mi novia, me acuerdo que me puse muy nervioso. \n Después nos encontramos con tu mamá y el Lemu, me acuerdo que te compró una taza de Princesita Sofía, lo cual me dio la idea de regalarte una más adelante. Me gusta mucho salir con vos y extraño hacerlo, creo que sos con la única persona con la que puedo caminar sin esperar llegar a algún lado. ¿Te acordás de la vez que corrimos por la cuarta? Fue la primera vez que corrí junto a alguien (quitando Educación Física), me gusta que seas la primera en muchas cosas. \n Es como que si quiero acordarme de la primera vez de algo, siempre termino pensando en vos. Me gusta pensar en vos, me gusta recordar tu risa, los giros que hacés, cómo empezás a mover las piernas cuando te estás meando o que bostecés cuando tenés frío. Saber qué gustos de helado solés elegir, lo mucho que te gustaba el pastel de papa (no estoy seguro de si te sigue gustando tanto) y quiero saber más. Quiero conocerte todos los días porque sos la persona más maravillosa, quiero ser un experto en vos. Tengo sueño, te extraño mucho Shirley, y te amo muchísimo. Me gustaría abrazarte hasta quedar pegado a vos, me gustaría cambiar de lugar con tu tumor por un día al menos. Espero soñar con vos, solo con vos.", fecha: "2026/01/31" },
    { foto: "fotos/foto17.jpg", msj: "Mi primera salida un 14 de febrero, para mí un momento bastante especial, para vos capaz no tanto. Te invité diciéndote que podíamos ver parejitas y burlarnos, cosa que por alguna razón hacíamos, nos burlábamos de lo cursis que eran y acá estoy yo, escribiendo esto en una página llena de fotos nuestras y corazones, con un cartel gigante que dice \"TE AMO SHIRLEY\". \n Ese día nos sacamos las fotos en la cabina que había en el shopping, creo que ya no hay ninguna, no entiendo por qué si eran geniales. También sacaste un peluche de un Among Us azul, no sé si te acordás, pero todavía lo tengo, no quiero tocarlo mucho porque se le había empezado a salir el relleno. Fue una salida hermosa, lástima que perdiste tu copia de las fotos ese día. \n De igual forma ahora tenés 2 de las 3 fotos, ya te voy a decir que le saques una foto y me la pases. Son lindas fotos, pero odio el filtro amarillento que tienen, recuerdo que fue todo muy rápido y no tuvimos tiempo de posar. Si en algún momento vemos una de esas cabinas tenemos que sacarnos otra foto, quiero una foto agarrándote la cara. \n Hoy quería verte, solo espero no sigas de tan mal humor, te va a terminar doliendo la cabeza. Te extraño Shirley, y creo que la próxima vez que te vea me voy a tirar encima tuyo (siempre que vos estés de acuerdo, obviamente). Podría cambiar de cuerpo con Lio para poder acostarme en tu pecho (me acabo de imaginar a un gato con mi cara, es muy raro). Te amo mucho mi amor, espero encontrarte por pura coincidencia y no estar muy croto si es que pasa. TE AMO MUCHO MUCHO MUCHO ❤️❤️❤️❤️❤️", fecha: "2026/02/01" },
    { foto: "fotos/foto18.jpg", msj: "Qué foto más rara, mirá mi cara, parezco un ciruja. ¿Por qué hice ese gesto? La debo haber pasado muy bien, me re estiré. Es sorprendente que tomábamos tereré hasta cuando hacía frío, tu termolar iba re combinado con el vaso. Qué linda que te quedaba esa campera, o capaz es porque era mía y me encantaba que la uses, me gustaba mucho cómo te quedaba el rojo, más que el azul, creo que te iluminaba más la cara, lo cual siempre era bueno. \n No me acuerdo nada de ese día, pero sí me acuerdo cuando me compraste una rata de gelatina, y creo que es de mis cosas dulces favoritas, no porque sea algo muy rico, sino porque me hace acordar a vos. Eso me hace acordar a cuando fuimos a la feria de la Escuela Hogar y compraste un vestido verde hermoso, qué lástima que nunca pude verte usándolo. Te quedan todos hermosos, las camisas también, pero siempre me van a gustar más los vestidos. \n No importa. ¿Qué opinás de la canción de hoy? Me da mucha risa y hay muchas más como esa. Ese día estabas muy en pedo, me pregunto si a día de hoy harías lo mismo, igual todas las que me mandaste son medio amorosas, se me hace muy tierno, ya eras tierna desde antes. Me duele un poco la cabeza pero el audio me hizo reír muchísimo. Espero que hayas tenido un día mejor que el anterior y espero que puedas dormir bien. \n Te extraño mucho mucho y te amo mucho mucho más.", fecha: "2026/02/02" },
    { foto: "fotos/foto19.jpg", msj: "Estabas tan obsesionada con las tetas que tuve que ponerme unas. ¿Te acordás cuando me tocabas el pecho? Nunca me había sentido tan manoseado en mi vida o cuando me tocaste el culo en la casa de Gonza, sos bastante degenerada. \n Espero que tu humor haya mejorado, aunque podrías estar medio estresada por las mesas, te va a ir bien, yo sé que sí. No sabés el calor asqueroso que hace, hace rato no sentía que mi cuerpo expulsaba tanto calor. Me acuerdo cuando hacía calor y te ponías bastante de mal humor, cualquier cosa la puedo relacionar con vos, es rarísimo. \n  Si hiciera frío también hay una relación, si llueve también hay una relación, si mañana me rapo la cabeza también hay una relación, siempre hay algo, estás en todos lados. Te extraño, extraño que chusmeemos sobre Gonza y Cami, creo que si somos viejos vamos a ser de esos que saben todo lo que pasa en el barrio, esos que se sientan afuera tomando mate.  Tambien quiero seguir andando en bici, así te re cagás de risa y te re burlás, capaz hasta me pisa un auto, me despierto y estamos subidos en una re ambulancia y me decís: \"no te mueras maxi viviiiiiiiii\". \n Te amo mucho Shirley y en serio espero que todo mejore, aunque no pueda hacer nada para que así sea. Gracias por ser tan clara y sincera conmigo, lo aprecio mucho. Te amo", fecha: "2026/02/03" },
    { foto: "fotos/foto20.jpg", msj: "No te imaginás cuánto te extraño. Daría cualquier cosa por cinco minutos más escuchando tu voz. Solo espero que no te pase nada, creo que es lo que más miedo me da, quiero que sepas que para cualquier cosa que necesites siempre voy a estar para vos. Te amo Shirley.", fecha: "2026/02/04" },
    { foto: "fotos/foto21.jpg", msj: "Últimamente me cuesta dormir, no sé por qué; capaz mi cabeza no se apaga, todo el tiempo recordando momentos, arrepintiéndome por no ser más amoroso, arrepentido por irme a dormir esa noche. Me siento vacío, como si una parte me faltara, como si ya nada importara porque no estás conmigo. \n ¿Hubiera sido mejor quedar como amigos? Creo que no; creo que eso sería poner un límite que a ambos nos encantaría romper. Y sí, te extraño, pero no quiero mandarte mensajes y que me contestes como si fuera un extraño; odio la idea de ser un desconocido, de estar lejos y no poder escuchar, no poder formar parte de la obra de arte que formás cuando aparecés. \n No sé si algún día vas a leer esto, pero ya podés aplicar para la beca del comedor y seguro te dejó de andar Magis TV (lo cual sería una buena excusa para hablarte). A veces me pregunto si en 10 años te seguirás acordando de mí; creo que me gustaría quedarme en tu mente, capaz te podría sacar alguna sonrisa. Espero haber sido lo suficientemente bueno para vos, sos lo más lindo que existe. Te amo mucho, desgraciada.", fecha: "2026/02/05" },


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


































