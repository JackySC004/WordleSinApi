let intentos = 6;
const button = document.getElementById("guess-button");
const input = document.getElementById("guess-input");
let diccionario = ['APPLE', 'HURLS', 'WINGS', 'YOUTH']
const palabra = diccionario[Math.floor(Math.random() * diccionario.length)];

button.addEventListener("click", intentar);

function leerIntento(){
    let intento = input.value.toUpperCase();
    return intento;
}

function intentar(){
    const INTENTO = leerIntento();
    
    if(INTENTO === palabra){
        terminar("<h1>GANASTE :D</h1>");
        return;
    }
    
    if(intentos === 0){
        terminar("<h1>PERDISTE!:(</h1>");
        return;
    }
    
    for(let i in palabra){
        if(INTENTO[i] === palabra[i]){
            console.log(INTENTO[i], "VERDE");
        } else if(palabra.includes(INTENTO[i])){
            console.log(INTENTO[i], "AMARILLO");
        } else{
            console.log(INTENTO[i], "GRIS");
        }
    }
    
    intentos--;
    
    if(intentos === 0){
        console.log("PERDISTE :(");
        terminar("<h1>PERDISTE!:(</h1>");
    }

    const GRID = document.getElementById("grid");
    const ROW = document.createElement('div');
    ROW.className = 'row';
    for (let i in palabra){
        const SPAN = document.createElement('span');
        SPAN.className = 'letter';
        if (INTENTO[i]===palabra[i]){ //VERDE
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'green';
        } else if( palabra.includes(INTENTO[i]) ) { //AMARILLO
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'yellow';
        } else {      //GRIS
            SPAN.innerHTML = INTENTO[i];
            SPAN.style.backgroundColor = 'grey';
        }
        ROW.appendChild(SPAN)
    }
    GRID.appendChild(ROW)
}

function terminar(mensaje){
    input.disabled = true;
    button.disabled = true;
    let contenedor = document.getElementById('guesses');
    contenedor.innerHTML = mensaje;
}
