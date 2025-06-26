'use strict';

let ataqueJugador = 0;
let ataqueEnemigo = 0;
let mascotaJugador = null;
let mascotaEnemiga = null;
let vidaMascota = 100;
let vidaMascotaEnemiga = 100;

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("button");
    botonMascotaJugador.addEventListener("click", function() {
        let mascotaSeleccionada = document.querySelector("input[name='mascota']:checked");
        if (mascotaSeleccionada) {
            mascotaJugador = mascotaSeleccionada.id;
            document.getElementById("mascotaSeleccionada").textContent = mascotaJugador;
            
            // Seleccionar mascota enemiga aleatoriamente
            seleccionarMascotaEnemiga();
        } else {
            alert("Por favor selecciona una mascota primero");
        }
    });

    // Agregar event listeners para los botones de ataque
    document.getElementById("ataque-fuego").addEventListener("click", function() {
        seleccionarAtaque('Fuego');
    });
    document.getElementById("ataque-agua").addEventListener("click", function() {
        seleccionarAtaque('Agua');
    });
    document.getElementById("ataque-tierra").addEventListener("click", function() {
        seleccionarAtaque('Tierra');
    });
}

function seleccionarMascotaEnemiga() {
    const mascotas = ["mascota1", "mascota2", "mascota3", "mascota4"];
    const mascotasDisponibles = mascotas.filter(mascota => mascota !== mascotaJugador);
    const indiceAleatorio = Math.floor(Math.random() * mascotasDisponibles.length);
    mascotaEnemiga = mascotasDisponibles[indiceAleatorio];
    
    document.getElementById("mascotaEnemiga").textContent = mascotaEnemiga;
    
    // Mostrar la sección de ataques
    document.getElementById("selecionarAtaque").style.display = "block";
}

// Listeners para los ataques
function seleccionarAtaque(tipo) {
    if (vidaMascota <= 0 || vidaMascotaEnemiga <= 0) {
        mostrarMensajeFinal();
        return;
    }
    // Ataque del jugador
    let danioJugador = calcularDanio(tipo);
    vidaMascotaEnemiga -= danioJugador;
    if (vidaMascotaEnemiga < 0) vidaMascotaEnemiga = 0;
    document.getElementById('vidaMascotaEnemiga').textContent = vidaMascotaEnemiga;
    mostrarMensaje('Tu mascota atacó con ' + tipo + ' y causó ' + danioJugador + ' de daño.');

    if (vidaMascotaEnemiga <= 0) {
        mostrarMensajeFinal();
        return;
    }
    // Ataque enemigo aleatorio
    let ataqueEnemigo = ataqueAleatorio();
    let danioEnemigo = calcularDanio(ataqueEnemigo);
    vidaMascota -= danioEnemigo;
    if (vidaMascota < 0) vidaMascota = 0;
    document.getElementById('vidaMascota').textContent = vidaMascota;
    mostrarMensaje('La mascota enemiga atacó con ' + ataqueEnemigo + ' y causó ' + danioEnemigo + ' de daño.');

    if (vidaMascota <= 0) {
        mostrarMensajeFinal();
    }
}

function calcularDanio(tipo) {
    // daño de los ataques
    if (tipo === 'Fuego') return Math.floor(Math.random() * 16) + 10; // 10-25
    if (tipo === 'Agua') return Math.floor(Math.random() * 11) + 5;  // 5-15
    if (tipo === 'Tierra') return Math.floor(Math.random() * 21) + 5; // 5-25
    return 10;
}

function ataqueAleatorio() {
    const ataques = ['Fuego', 'Agua', 'Tierra'];
    return ataques[Math.floor(Math.random() * ataques.length)];
}

function mostrarMensaje(mensaje) {
    let p = document.createElement('p');
    p.textContent = mensaje;
    document.getElementById('selecionarAtaque').appendChild(p);
}

function mostrarMensajeFinal() {
    let resultado = '';
    if (vidaMascota <= 0 && vidaMascotaEnemiga <= 0) {
        resultado = '¡Empate!';
    } else if (vidaMascota <= 0) {
        resultado = '¡Perdiste!';
    } else if (vidaMascotaEnemiga <= 0) {
        resultado = '¡Ganaste!';
    }
    mostrarMensaje(resultado);
    document.getElementById('ataque-fuego').disabled = true;
    document.getElementById('ataque-agua').disabled = true;
    document.getElementById('ataque-tierra').disabled = true;
}

// para juges se necesita recargar la pagina
window.addEventListener('DOMContentLoaded', iniciarJuego);
