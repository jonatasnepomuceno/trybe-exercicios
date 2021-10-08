// Exercício 11

let salBruto = 3000;
let inss;
let ir;
let parcela;
let salLiq;


if (salBruto <= 1556.94) {
  inss = salBruto * 0.08;
} else if (salBruto >= 1556.95 && salBruto <= 2594.92) {
  inss = salBruto * 0.09;
} else if (salBruto >= 2594.93 && salBruto <= 5189.82) {
  inss = salBruto * 0.11;
} else if (salBruto > 5189.82) {
  inss = 570.88;
} 

let salBase = salBruto - inss;

if (salBase <= 1903.98) {
  ir = 0;
} else if (salBase >= 1903.99 && salBase <= 2826.65) {
  ir = 0.075;
  parcela = 142.80;
} else if (salBase >= 2826.66 && salBase <= 3751.05) {
  ir = 0.15;
  parcela = 354.80;
} else if (salBase >= 3751.06 && salBase <= 4664.68) {
  ir = 0.225;
  parcela = 636.13;
} else if (salBase > 4664.68) {
  ir = 0.275;
  parcela = 869.36;
}

ir = (salBase * ir) - parcela; 

salLiq = salBase - ir; 

console.log(salLiq);
