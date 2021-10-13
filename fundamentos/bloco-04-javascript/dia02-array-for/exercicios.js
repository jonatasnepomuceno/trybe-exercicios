let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercicio 1

for (let i1 = 0; i1 < numbers.length; i1 +=1) {
  console.log(numbers[i1]);
}

// Exercicio 2
let soma2 = 0
for (let i2 = 0; i2 < numbers.length; i2 +=1) {
  soma2 = soma2 + numbers[i2];
}

console.log("Soma = " + soma2);

// Exercicio 3

let soma3 = 0
let media3 = 0
for (let i3 = 0; i3 < numbers.length; i3 +=1) {
  soma3 = soma3 + numbers[i3];
}
media3 = soma3 / numbers.length;
console.log("Média = " + media3);

// Exercicio 4

if (media3 > 20) {
  console.log("Valor maior que 20")
} else {
  console.log("Valor menor que 20")
}

// Exercicio 5

let maiorValor = numbers[0];
for (let i5 = 0; i5 < numbers.length; i5 +=1) {
  if (numbers[i5] >= maiorValor) {
    maiorValor = numbers[i5];
  } 
}
console.log("Maior valor = " + maiorValor);

// Exercico 6 

let numImpar = 0; 
let numPar = 0; 
for (let i6 = 0; i6 < numbers.length; i6 +=1) {
  if (numbers[i6] % 2 == 1) {
    numImpar = numImpar + 1;
  } 
}
if (numImpar > 0) {
  console.log("Qtd n° impares = " + numImpar); 
} else {
  console.log("Nenhum número impar")
}

// Exercicio 7 

let menorValor = numbers[0];
for (let i7 = 0; i7 < numbers.length; i7 +=1) {
  if (numbers[i7] <= menorValor) {
    menorValor = numbers[i7];
  } 
}
console.log("Menor valor = " + menorValor);

// Exercicio 8

let array08 = [1, 4, 7, 9, 10, 11, 16, 18, 21, 22];


// Exercicio 9

for (let i9 = 0; i9 < array08.length; i9 +=1) {
  console.log(array08[i9] / 2);
}