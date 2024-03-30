//High Order Function

//*1. Função que retorna outra função como parametro

function welcome(coursename) {
  return (studentname) => {
    console.log(
      `Olá ${studentname}, seja bem vindo ao curso de ${coursename}`
    );
  };
}

const outrafunc = welcome("Front end em React");
const outrafuncback = welcome("Back End em Node.js");

outrafunc("Isabella Ribas");
outrafuncback("Anna Santos");

//*2. Fução que recebe outra funcao como pramentro

const soma = (nu1,nu2)=> nu1 + nu2;
const sub = (nu1, nu2) => nu1-nu2;
const mult = (nu1,nu2) => nu1*nu2;
const div = (nu1,nu2) => nu1/nu2;

const calc = (nu1,nu2, operacao) => operacao(nu1,nu2);

console.log(calc(10,5,div));


console.log(calc(12,5, (nu1, nu2) => nu1 * nu2 + 2 *nu1 * nu2));

//Funções de alta orderm exemplo



