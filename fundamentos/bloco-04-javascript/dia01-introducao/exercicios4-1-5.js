// Exercício 5

const nA5 = -60;
const nB5 = 60;
const nC5 = 60;
let eTriangulo;

if (nA5 > 0 && nB5 > 0 && nC5 > 0) {

  if ((nA5 + nB5 + nC5) == 180) {
    eTriangulo = true; 
  } else {
    eTriangulo = false;
  } 
  
  console.log(eTriangulo);

} else {
  console.log("Erro! Ângulo errado.")
}
