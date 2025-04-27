//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Lê a quantidade de golpes informada pelo usuário. 
// O parseInt(()) vai converter os valores de entrada(string) para um valor numérico(Int).
// Lê a quantidade de golpes informada pelo usuário. 
const quantidadeGolpes = parseInt(gets());

// Defina os tipos de minerais: Carvao, Ferro, Diamante, Pedra
let minerais = ["Carvao", "Ferro", "Diamante", "Pedra"];

// Loop para cada golpe, de 1 até a quantidade informada
for (let i = 1; i <= quantidadeGolpes; i++) {
  // Ajuste no índice para começar com o primeiro mineral como "Carvao"
  let minaIndex = (i - 1) % minerais.length;
  
  // Exibe o número do golpe seguido do mineral correspondente
  print(i + ": " + minerais[minaIndex]);
}


