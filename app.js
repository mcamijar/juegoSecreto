// Document Object Model
let numeroMaximo = 10;
let listaNumerosSorteados = []; 
let numeroSecreto = genSecreto();
let numeroIntentos = 0;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroUsuario);
    console.log(typeof(numeroUsuario));
    console.log(numeroSecreto == numeroUsuario);
    numeroIntentos ++;
    if (numeroUsuario== numeroSecreto) {
        asignarTextoElemento("p", `Acertaste el número!! Te tomó ${numeroIntentos} ${ numeroIntentos == 1 ? "intento": "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");}
        
        else  { 
            // el usuario no acerto
            if (numeroUsuario > numeroSecreto) { 
            asignarTextoElemento("p", "El número es menor");}
        else {
            asignarTextoElemento("p", "El número es mayor");
        
        }
        
        limpiarCaja();
        } 
           return;
    }
function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function genSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
    }
    else{
    // Si numero generado incluido en lista 

    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return genSecreto();
    } 
    else {listaNumerosSorteados.push(numeroGenerado);}
    return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = genSecreto();
    numeroIntentos = 0;
}

function reiniciarJuego() { 
    // limpiar caja
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // generar numero aleatorio
    // inicializar numero de intentos
    condicionesIniciales();
    // deshabilitar boton
    document.querySelector("#reiniciar").setAttribute("disabled","true");    
}
condicionesIniciales()