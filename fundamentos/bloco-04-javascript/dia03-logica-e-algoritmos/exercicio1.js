//Exercício 1

let n = 4;
let asterisco = "*";
let mensagem;

for (let indice = 0; indice < n; indice += 1) {
    mensagem = asterisco;
    for (let indice2 = 0; mensagem.length < n; indice2 += 1){
        mensagem = mensagem + asterisco;
    }
    console.log(mensagem)
}