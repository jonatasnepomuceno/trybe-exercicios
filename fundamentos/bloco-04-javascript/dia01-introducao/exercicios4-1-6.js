// Exercício 6

let pecaXadrez = "RAINHA"

switch (pecaXadrez.toLowerCase()) {
  case "peao":
    console.log("Em frente e come na diagonal.");
    break;

  case "torre":
    console.log("Horizontal e Vertical.");
    break;
  
  case "cavalo":
    console.log("Em L.");
    break;

  case "bispo":
    console.log("Diagonais.");
    break;

  case "rainha":
    console.log("Todas as direções.");
    break;

  case "rei":
    console.log("Todas as direções de 1 em 1 casa.");
    break;

  default:
    console.log("Erro! Peça inexistente.");
}
