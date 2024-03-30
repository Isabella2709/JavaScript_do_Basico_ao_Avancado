function olaMund(nomeDoEstudante, curso="Front end em React") { //você pode passar um recurso padrão para aquele paremtro
  //template string
return `Olá ${nomeDoEstudante}, bem vindo ao curso de ${curso}!`;
}

let ola1 = olaMund("Isabella");


let ola2 = olaMund("Wallisson", "CSS");

console.log(ola1);
console.log(ola2);

//FUNÇÕES SERVEM PARA REAPROVEITAMENTO DE CODIGO

function somar(numero1, numero2){
    return numero1 + numero2;
}

let resultado = somar(3,4);

console.log(resultado);

// funções parte 1 finalizada

console.clear();

//funções anonimas


//funcao sem nome, funcoes anonimas

let caldobro = function (numero1){
  return numero1 * 2
};

const dobro = caldobro(2);

console.log(dobro);

// dependendo do caso, conseguimos usar esse tipo de funcao sem nome e atribuila a uma variavel.

// arrow functions : Função seta

let subtrair  = (number1, nuber2)=>{
  return number1 - nuber2;
}

let primsub = subtrair(7, 2);

console.log(primsub);


let mult = (num1, num2) => num1*num2;

let mult1 = mult(1,7);

console.log(mult1);

let tripoDoNum = (num1) => num2 * 3;


//tudo sobre funções 

console.clear();


function funcao(array){
  let acc = 0;

  for(let elemento of array){
    acc += elemento;
  }

  return (acc / array.length);
}

console.log(funcao([4,6,4,2]));

// resultado sera 4