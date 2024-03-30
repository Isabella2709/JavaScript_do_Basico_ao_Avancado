// Funções de alta ordem de arrays

// Arrays forEach();

const numeros = [40, 34, 67, 89, 23, 10];

/*function imprimirElemento(elemento) {
  // EXEMPLO DE FUNCAO SIMPLES PARA USAR O FOREATCH()
  console.log(elemento);
}
*/

//Jeito de usar o forEatch() 
numeros.forEach((elemento, index, array) => {
  console.log(index, elemento, array);
});


// 2 - array.prototype.find(): util para encontrar um elemento dentro do array

const encontra = numeros.find((numero) => {
    return numero < 20;
});

console.log(encontra);


const pessoas = [
    {
        nome:"Isa",
        idade: 22,
    },
    {
        nome:"Luciana",
        idade: 46,
    },
    {
        nome:"Lele",
        idade: 28,
    },

];

const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 40);

console.log(pessoaEncontrada);

//Tambem serve para encontrar componentes em objetos


//FindIndex(), encontra o indice

const indicepessoa = pessoas.findIndex(
    (pessoa) => pessoa.idade > 20
);

console.log(indicepessoa);

//Mostra o indice em que esta aquele elemento.







