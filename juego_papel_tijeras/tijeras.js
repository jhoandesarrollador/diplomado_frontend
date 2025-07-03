// Variables globales para el puntaje
let puntajeJugador = 0;
let puntajeComputadora = 0;

// Las opciones del juego
const opciones = ['piedra', 'papel', 'tijeras'];

// Función principal para jugar
function jugar(eleccionJugador) {
    // La computadora elige aleatoriamente
    const eleccionComputadora = obtenerEleccionComputadora();
    
    // Determinamos el ganador
    const resultado = determinarGanador(eleccionJugador, eleccionComputadora);
    
    // Mostramos los resultados
    mostrarResultados(eleccionJugador, eleccionComputadora, resultado);
    
    // Actualizamos los puntajes
    actualizarPuntajes(resultado);
}

// Función para que la computadora elija aleatoriamente
function obtenerEleccionComputadora() {
    const indiceAleatorio = Math.floor(Math.random() * 3);
    return opciones[indiceAleatorio];
}

// Función para determinar el ganador
function determinarGanador(jugador, computadora) {
    // Si son iguales, es empate
    if (jugador === computadora) {
        return 'empate';
    }
    
    // Verificamos las combinaciones ganadoras para el jugador
    if (
        (jugador === 'piedra' && computadora === 'tijeras') ||
        (jugador === 'papel' && computadora === 'piedra') ||
        (jugador === 'tijeras' && computadora === 'papel')
    ) {
        return 'jugador';
    } else {
        return 'computadora';
    }
}

// Función para mostrar los resultados en pantalla
function mostrarResultados(jugador, computadora, resultado) {
    // Obtenemos los elementos del HTML
    const elementoResultados = document.getElementById('resultados');
    const elementoEleccionJugador = document.getElementById('eleccion-jugador');
    const elementoEleccionComputadora = document.getElementById('eleccion-computadora');
    const elementoMensaje = document.getElementById('mensaje');
    
    // Convertimos las opciones a emojis
    const emojiJugador = obtenerEmoji(jugador);
    const emojiComputadora = obtenerEmoji(computadora);
    
    // Mostramos las elecciones
    elementoEleccionJugador.textContent = `Tú elegiste: ${emojiJugador} ${jugador.toUpperCase()}`;
    elementoEleccionComputadora.textContent = `Computadora eligió: ${emojiComputadora} ${computadora.toUpperCase()}`;
    
    // Mostramos el mensaje del resultado
    let mensaje = '';
    let claseCSS = '';
    
    if (resultado === 'empate') {
        mensaje = '¡Es un empate! 🤝';
        claseCSS = 'empate';
    } else if (resultado === 'jugador') {
        mensaje = '¡Ganaste! 🎉';
        claseCSS = 'ganador';
    } else {
        mensaje = '¡La computadora ganó! 😢';
        claseCSS = 'perdedor';
    }
    
    elementoMensaje.textContent = mensaje;
    elementoMensaje.className = `mensaje-resultado ${claseCSS}`;
    
    // Mostramos la sección de resultados
    elementoResultados.style.display = 'block';
}

// Función para obtener el emoji correspondiente
function obtenerEmoji(opcion) {
    if (opcion === 'piedra') {
        return '🪨';
    } else if (opcion === 'papel') {
        return '📄';
    } else if (opcion === 'tijeras') {
        return '✂️';
    }
}

// Función para actualizar los puntajes
function actualizarPuntajes(resultado) {
    if (resultado === 'jugador') {
        puntajeJugador++;
    } else if (resultado === 'computadora') {
        puntajeComputadora++;
    }
    
    // Actualizamos los números en pantalla
    document.getElementById('puntaje-jugador').textContent = puntajeJugador;
    document.getElementById('puntaje-computadora').textContent = puntajeComputadora;
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Confirmamos si el usuario quiere reiniciar
    const confirmar = confirm('¿Estás seguro de que quieres reiniciar la puntuación?');
    
    if (confirmar) {
        // Reiniciamos los puntajes
        puntajeJugador = 0;
        puntajeComputadora = 0;
        
        // Actualizamos la pantalla
        document.getElementById('puntaje-jugador').textContent = puntajeJugador;
        document.getElementById('puntaje-computadora').textContent = puntajeComputadora;
        
        // Ocultamos los resultados
        document.getElementById('resultados').style.display = 'none';
        
        alert('¡Puntuación reiniciada! 🔄');
    }
}

// Mensaje de bienvenida cuando se carga la página
window.onload = function() {
    console.log('¡Juego de Piedra, Papel y Tijeras cargado! 🎮');
    console.log('Hecho por un desarrollador junior 😊');
};
