// Exercício 10

const vCusto = 50;
const vVenda = 100;
let imposto = vCusto * 0.20;
let vCustoTotal = vCusto + imposto;
let vLucro = vVenda - vCustoTotal;
let tVendas = 1000;

if (vCusto < 0 || vVenda < 0) {
  console.log("Valores inválidos!");
} else {
  console.log(vLucro * tVendas);
}