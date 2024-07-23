let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
let intentosMaximos = 10;



function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);    
    //console.log(numeroDeUsuario === numeroSecreto); //true or false
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p' , `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p' , 'El numero secreto es menor!');
        } else {
            asignarTextoElemento('p' , 'El numero secreto es mayor!');
        }
        intentos++;
        if (intentos > intentosMaximos) {
            asignarTextoElemento('p' , 'Llegaste al numero maximo de intentos, mas suerte a para la proxima!');
        }
        limpiarCaja(); 
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generadorDeNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);

    //si todos los numeros posibles sorteados en el rango definido, ya fueron alimentados a la lista, el numero debe ser igual a la cantidad de elementos de la lista
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p' , 'Ya se sortearon todos los numeros posibles');
    } else {
        //Si el numero generado esta incluido en la lista, corre de nuevo la funcion, de lo contrario, agregalo a la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generadorDeNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    } 
}  


function condicionesIniciales() {
    asignarTextoElemento('h1' , 'El juego del Numero Secreto');
    asignarTextoElemento('p' , `Indica un numero entre el 1 y ${numeroMaximo}`);
    numeroSecreto = generadorDeNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

condicionesIniciales();

function reiniciarJuego() {
    condicionesIniciales();
    limpiarCaja();
    document.querySelector('#reiniciar').setAttribute('disabled' , 'true' );
}
