let listaGenerica = [];
let lenguajesDeProgramacion = ['Javascript','C','C++','Kotlin','Python'];

lenguajesDeProgramacion.push('Java','Ruby','GoLang');

function mostrarLenguajesDeProgramacion() {
    console.log(lenguajesDeProgramacion)
}

function ordenInversoLenguajesDeProgramacion() {
    console.log(lenguajesDeProgramacion.reverse());
}

mostrarLenguajesDeProgramacion();
ordenInversoLenguajesDeProgramacion();

// 6.- CREA UNA FUNCION QUE CALCULE EL PROMEDIO DE LOS ELEMENTOS EN UNA LISTA DE NÜMEROS
var numeros = [5,8,9,7,10];

function promedio() {
    let suma = numeros.reduce((a,b) => a + b, 0);
    let total = suma / numeros.length;
    console.log(`El promedio es: ${total}`)
}

promedio();

// 7.- CREA UNA FUNCIÓN QUE MUESTRE EN LA CONSOLA EL NÚMERO MÁS GRANDE Y EL NÚMERO MÁS PEQUEÑO
function numeroMaxYMin () {
    
}
numeroMaxYMin();

// 8.- CREA UNA FUNCIÓN QUE DEVUELVA LA SUMA DE TODOS LOS ELEMENTOS EN UNA LISTA

/* 
9.- CREA UNA FUNCIÓN QUE DEVUELVA LA POSICIÓN EN LA LISTA DONDE SE 
ENCUENTRA UN ELEMENTO PASADO COMO PARÁMETRO, O -1 SI NO EXISTE EN LA LISTA */

/* 10.- CREA UNA FUNCIÓN QUE RECIBA DOS LISTAS DE NÚMEROS DEL MISMO TAMAÑO Y DEVUELVA
UNA NUEVA LISTA CON LA SUMA DE LOS ELEMENTOS UNO A UNO */

/* 11.- CREA UNA FUNCIÓN QUE RECIBA UNA LISTA DE NÚMEROS Y DEVUELVA UNA NUEVA 
LISTA CON EL CUADRADO DE CADA NÚMERO */

// https://github.com/alura-es-cursos/js-curso/blob/main/4.md