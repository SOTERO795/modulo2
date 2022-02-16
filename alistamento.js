const dadosDigitadoUsuario = require("readline-sync");

console.log("MINISTÉRIO DA DEFESA");
console.log("SEJA BEM VINDO A FORÇA ÁREA BRASILEIRA");

const ano = dadosDigitadoUsuario.question("INFORME SEU ANO DE NASCIMENTO - ");

var anoNascimento = ano;
var anoAtual = 2022;

var idade = anoAtual - anoNascimento;

//Verifica se a pessoa tem idade inferior a 18 anos 
if (idade <= 17) {
  console.log("VOCÊ TEM" + " " + idade + " " + "ANOS");
  console.log("ALISTAMENTO NÃO PERMITIDO");

  //Verifica se a pessoa tem  apenas 18 anos de idade
} else if (idade === 18) {
  console.log("VOCÊ TEM" + " " + idade + " " + "ANOS");
  console.log("ALISTAMENTO PERMITIDO, APRESENTE-SE A JUNTA DE ALISTAMENTO");

  //Informa que a pessoa é maior de 18 anos e orienta a situação necessária
} else {
  console.log("VOCÊ TEM" + " " + idade + " " + "ANOS");
  console.log(
    "PASSOU DO PRAZO DE ALISTAMENTO, APRESENTE-SE A JUNTA DE ALISTAMENTO E DEPOIS NA SALA DO COMANDO"
  );
}
