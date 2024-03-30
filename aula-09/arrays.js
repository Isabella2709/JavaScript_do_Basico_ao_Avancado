//Arrays são estruturas de dados e serve para armazenas varios valores;

const notasDosAlunos = [10, 8, 5];
const pessoa = ["Isabella", 22, 1.64, true];

console.log(pessoa[0]);

console.log(pessoa.length);

//fateamento de arrays

const numeros = [40, 34, 67, 89, 23, 10];

console.log(numeros.slice(0, 4)); // começar o array de onde e terminar de onde tambem;
// a posição do array começa com zero;

console.log(numeros.push(0)); //Adicionar numeros ao array
console.log(numeros);

console.clear();

numeros.unshift(22);
console.log(numeros);
console.clear();

numeros.pop(0);
//remover elementos no final

console.log(numeros);

numeros.shift(); // remove o elemento primeiro

console.log(numeros);

//Buscando elementos em um array;

console.clear();

console.log(numeros.includes(23));
// localiza e retorna se true se tiver, e false se não tiver esse elemento no array

console.clear();

//Index of

const indicedele = numeros.indexOf(67);
console.log(indicedele);

console.clear();

for(let i = 0; i < numeros.length; i++){
    console.log("O Elemento: ",i," é: ", numeros[i]);
}

//percorrer o array

//for-of

for(const elemento of numeros){
    console.log(elemento);
}


console.clear();

//for in 


for(const indice in numeros){
    console.log(indice, typeof indice); // mostra os indices do array;
    console.log(numeros[0]);
}









