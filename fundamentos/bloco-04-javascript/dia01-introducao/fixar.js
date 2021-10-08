//Primeiros passos

//const myName = "Jônatas";

//const birthCity = "Rio Branco";

//const birthYear = 1997;

//console.log(myName);
//console.log(birthCity);
//console.log(birthYear);

//birthYear = 2030;

//console.log(birthYear);

//birthCity = "Franca";

//console.log(birthCity);

/* Tipos primitivos, tipagem dinâmica e Operações Aritméticas

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo)
console.log(typeof patientEmail)

console.log(typeof patientAge) 

const base = 5;
const heigth = 8;
const area = base * heigth;
console.log(area);
const perimeter = base + heigth + base + heigth;
console.log(perimeter); */

/* If e Else

const nota = 30;

if (nota>= 80) {
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota < 80 && nota >= 60) {
  console.log("Você está na nossa lista de espera");
} else if (nota < 60) {
  console.log("Você foi reprovada(o)");
} else {
  console.log("Faça o teste");
} */

// Operadores lógicos
// AND 

const currentHour = 20;
let message;

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do almoço!!!";
} else if (currentHour >= 4 && currentHour < 11) {
  message = "Hmmm, cheiro de café recém passado";
} 

console.log(message);

// OR

let weekDay = "sexta-feira";

if (weekDay === 'segunda-feira' || weekDay === 'terça-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
  console.log("Oba, mais um dia de aprendizado na Trybe >:D")
} else {
  console.log("FINALMENTE, descanso merecido UwU")
}
