//Exercício 4
// Ajuda do Jotta Novaes
let asterisco = '*';
let espaco = ' ';
let n = 11;
/* n precisa ser impar*/
let mensagem = '';
for (i = n; i > 0 ; i -= 2 ) {
  for (j = Math.floor(i/2); j > 0 ; j-- ) {
    mensagem += espaco;
  }
  for (j = i ; j <= n ; j++) {
    mensagem += asterisco;
  }
  for (j = Math.floor(i/2); j > 0 ; j-- ) {
    mensagem += espaco;
  }

  console.log(mensagem);
  mensagem = '';
}