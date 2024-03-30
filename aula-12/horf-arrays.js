// every
const numeros = [40, 34, 67, 89, 23, 10];

const todoposi = numeros.every((elementos) => elementos > 0);

console.log(todoposi);

//some : verifica se algum elemento do array é aquele parametro que foi passado e perguntado

const numeros2 = [-1,3,7,-3,5];

const retorno1 = numeros2.some((numero) => numero > 0);

console.log(retorno1); // vai retornar true, pois alguns dos elementos, atendem aquela comparacao logica





