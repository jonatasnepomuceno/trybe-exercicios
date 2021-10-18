
// Exe 1
function palindrome(palavra){
  for(index in palavra){
    if(palavra[index] != palavra[(palavra.length - 1) - index]){
      return false;
    }
  }
  return true;
}

console.log(palindrome('arara'));
console.log(palindrome('jonatas'));

// Exe 2 
function indMaior(array) {
  let maiorValor = 0;
  for (let indice in array) {
    if (array[maiorValor] < array[indice]) {
      maiorValor = indice;
    }
  }
  return "Maior número = " + maiorValor;
};

console.log(indMaior([2, 3, 6, 7, 10, 1]));

//Exe 3

function indMenor(array) {
  let menorValor = 0;
  for (let indice in array) {
    if (array[menorValor] > array[indice]) {
      menorValor = indice;
    }
  }
  return "Menor número = " + menorValor;
};

console.log(indMenor([2, 4, 6, 7, 10, 0, -3]));

// Exe 4 

function maiorNome(nomes) {
  let maisLetras = nomes[0];
  for (let indice in nomes) {
    if (maisLetras.length < nomes[indice].length) {
      maisLetras = nomes[indice];
    }
  }
  return maisLetras;
}
console.log(maiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));

// Exe 5
function nrepetido(numeros) {
  let contRepetido = 0;
  let contNumero = 0;
  let indexNumeroRepetido = 0;
  for (let index in numeros) {
    let verificaNumero = numeros[index];
    for (let index2 in numeros) {
      if (verificaNumero === numeros[index2]) {
        contNumero += 1;
      }
    }
    if (contNumero > contRepetido) {
      contRepetido = contNumero;
      indexNumeroRepetido = index;
    }
    contNumero = 0;
  }
  return numeros[indexNumeroRepetido];
}

console.log(nrepetido([2, 3, 2, 5, 8, 2, 3]));



