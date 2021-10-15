//Exercício 3
// Ajuda do Jotta Novaes e Danilo do Valle;
let n = 5; 
let asterisco = "*";
let mensagem = "";
let espaco = ' ';

for (i = n ; i > 0 ; i--) {
  for(j = i - 1 ; j > 0 ; j--) {
    mensagem += espaco;
  }
  for(j = n - i + 1 ; j > 0 ; j--) {
    mensagem += asterisco;
  }
  console.log(mensagem);
  mensagem = '';
}