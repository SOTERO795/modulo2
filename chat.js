//readline-sync é uma dependencia que pode ser utilizada para versatilidade
const input = require("readline-sync");

console.log("seja bem vindo! prencha seu cadastro");

const idade = input.question("Informe sua idade - ");

if (idade >= 16 && idade <= 17) {
  console.log(
    "Sua entrada está autorizada, porem não pode consumir bebidas alcolicas : ACESSO LIBERADO"
  );
} else if (idade >= 18) {
  console.log("Você esta autorizado a consumir bebida alcolica");
} else {
  console.log(
    idade + " anos !" + " Você é de menor idade, sua entrada não está autorizada: ACESSO NEGADO"
  );
}
