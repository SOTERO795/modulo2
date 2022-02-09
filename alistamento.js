const dadosDigitadoUsuario = require("readline-sync");
console.log("MINISTÉRIO DA DEFESA");
console.log("SEJA BEM VINDO A FORÇA ÁREA BRASILEIRA");

const ano = dadosDigitadoUsuario.question("INFORME SEU ANO DE NASCIMENTO - ");

anoNascimento = ano;
anoAtual = 2022;

idade = anoAtual - anoNascimento;

if (idade <= 17) {
  console.log("VOCÊ TEM" + " " + idade + " " + "ANOS");
  console.log("ALISTAMENTO NÃO PERMITIDO");
} else if (idade === 18) {
  console.log("VOCÊ TEM" + " " + idade + " " + "ANOS");
  console.log("ALISTAMENTO PERMITIDO, APRESENTE-SE NA SALA DO COMANDO");
} else if (idade > 18 && idade <= 19) {
  console.log("FORA DO PRAZO DE ALISTAMENTO");
}
