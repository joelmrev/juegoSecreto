function saludo() {
    console.log('Holaa,mundo!')
}

function saludoPersonalizado(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}

function dobleNumero(numero) {
    return numero*2;
}

function promedio(n1, n2, n3) {
    let promedioTotal = ((n1+n2+n3)/3);
    return promedioTotal;
}

function numeroMayor(num1,num2) {
    if (num1 > num2) {
        return num1;
    }else {
        return num2;
    }
}

function mult (number) {
    return number*number;
}

saludo();
saludoPersonalizado('Joel');

let resultadoDoble = dobleNumero(7);
console.log(resultadoDoble);

let promFinal = promedio(8,5,7);
console.log(promFinal);

let numMay = numeroMayor(7,4);
console.log(numMay);

let multi = mult(7);
console.log(multi);