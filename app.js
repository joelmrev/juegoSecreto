// Declaración de variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; //lista inicializada en vacío
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


 function verificarIntento() {
                         // Obtener elemento por ID y convertir todo al número con parseInt
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertase el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // Obtener el elemento INPUT por ID, así como quitar el atributo 'disable'
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }
    return;
 }

 function limpiarCaja() {
    // FORMA MÁS REDUCIDA
    document.querySelector('#valorUsuario').value = '';

              /*    FORMA MÁS 'EXTENSA'  
               // Obtener el valor del usuario por ID utilizando '#' con querySelector
    let valorCaja = document.querySelector('#valorUsuario');
    // se llama al valor de la caja y se le asigna un valor vacío con las ''
    valorCaja.value = ''; */
 }

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // SI ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los números posibles.')        
    } else {
    //  SI el número generado está incluido en la lista
    // el método "includes" recorre todo el array y verifica si un valor ya existe y nos devuelve un valor booleano
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }    
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // Limpiar la Caja
    limpiarCaja();
    // Indicar mensaje de intervalos de números
    // Generar el Número aleatorio
    // Inicializar el número de intentos
    condicionesIniciales();
    // Desabilitar el botón de nuevo juego
                        // método para colocar atributos (atributo, valor del atributo)
    document.querySelector('#reiniciar').setAttribute('disabled', 'true')
    

}

condicionesIniciales();