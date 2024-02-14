// 1.- CÁLCULO DE IMC
function calculoIMC(altura, peso) {
    let IMC = peso / (altura*altura);
    return console.log(IMC);
}

calculoIMC('1.57','56.7');

// 2.- FACTORIAL
/* function calculoFactorial(numero) {    
        for (let  i = numero; i <= 0; i--) {
            let resultadoFactorial = numero * numero;
            console.log(resultadoFactorial);
            console.log(typeof(resultadoFactorial));
        }
        
}   */                                                                                                                                            

/* function calculoFactorial(numero) {
    for (i= 1; i= numero; i++) {
        let suma = 0;
        let resultadoFactorial =  suma;
        let calculo = i;
        
    }
} */
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  //let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
  

calculoFactorial('5');

// 3.- CONVERSIÓN VALOR A DÓLARES

function convertirAdolar(moneda) {
    let valorDolar = 17.13;
    let resultado = moneda / valorDolar;
    console.log(resultado);
}

convertirAdolar ('155.6')

// 4.- CÁLCULO DE ÁREA Y PERÍMETRO DE UN RECTÁNGULO

function areaYperimetro(altura, anchura) {
    let area = altura * anchura;
    let perimetro = (2*altura) + (2*anchura);
    console.log(`El área es ${area} y el perímetro es ${perimetro}`);
}

areaYperimetro('5','4');

// 5.- CÁLCULO DE ÁREA Y PERÍMETRO DE UN CÍRCULO

function calculoCirculo(radio) {
    let pi = 3.14;
    let area = pi * radio*radio;
    let perimetro = 2*pi*radio;
    console.log(`El área es ${area} y el perímetro es ${perimetro}`);
}

calculoCirculo('5.5');

// 6.- TABLA DE MULTIPLICAR
function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);
  