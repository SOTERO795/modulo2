//Desenvolvendo laços de interação

//modo rustico basico

/*console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);*/

//Utilizando a estrutura de iteração while

/*let x = 1;

while (x <= 5) {
  console.log(x);
  //x = x + 1; = x++
  x++
}*/

//Utilizando a estrutura de iteração for
/*
for (x = 1;x <=10; x++){
    console.log(x)
}

for(x = 9;x >=1; x--){
    console.log(x);
}*/

let dia = "domingo";
switch(dia){

   case "segunda" :
       console.log("comecou a semana");
       break;
    case "terça" :
    case "quarta" :
        console.log("aguenta ai e pega teu cafe, a semana não acabou");
        break;

    case "quinta" :
        console.log("É quase sexta, mas não sextou");
        break;
    case "sexta" :
        console.log("Sextouuuuuu");
        break;
    case "sabado":
    case "domingo":
        console.log("chegou o final de semana, bom descanso :)")
        break;
    default:
        console.log("Não achei sua condição.");
    
}

