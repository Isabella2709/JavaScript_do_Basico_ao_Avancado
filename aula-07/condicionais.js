const prompt = require('readline-sync');

const idade = Number(prompt.question("Qual e a sua idade: "));

const maior = idade >= 18;

if(idade >= 18){
    console.log("É maior de idade");
}else{
    console.log("Ele é menor de idade ");

}


const media = 10;

if(media >= 7){
    console.log("Aprovado!");
}else if(media >=5){
    console.log("Recuperação")
}else{
    console.log("Reprovado");
}


const idadedoaluno = 19;
const temcnh = true;

if(idadedoaluno >= 18 && temcnh){
    console.log("Você pode dirigir.");
}else{
    ("Você não pode dirigir");
}

// estrutura condicional com if, else, e else if.

switch(idadedoaluno){
    case 22:
    console.log("Pode dirigir, você é maior de 21");
    break;
    case 19:
        console.log("Você ja pode tirar a carteira.");
    break;
    default:
        console("Você é de menor, não pode dirigir");
}

// tipo de estrutura condicional com switch, analisando atraves de casos


//Operador ternario: 

const minhaidade = 22;

minhaidade >= 18 ? console.log("Maior de idade"): console.log("Menor de idade");
// como se fosse um if else menor e em 1 linha só, mais indicado par retornar valores no caso;


// TRUTHY & FALSY 

if(2){
    //ele vai considerar verdadeiro, se colocar um valor ok, mas se colocar um objeto nullo 
    //e ou uma string vazia, ele consider como falso

}


