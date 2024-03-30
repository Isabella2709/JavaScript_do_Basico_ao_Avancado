//REDUCE

const numeros = [1, 2, 3, 4, 5];

const soma = numeros.reduce((acumulador, elemento, index, array) => {
  return elemento + acumulador;
}, 0); //Partindo do zero, Sempre colocar o 0 para conseguir rodar

console.log(soma);

const media = numeros.reduce((acumulador, elemento, _, array) => {
  return elemento + array.length / acumulador;
}, 0);

console.log(media);

const somaDosPares = numeros.reduce((acumulador, numero) => {
  if (numero % 2 === 0) {
    // se o numero for par adiciona ele para ser contabilizado na conta
    return numero + acumulador;
  } else {
    return acumulador;
  }
}, 0);

console.log(somaDosPares);

//Esse reduce percorre cada item e vai incrementando o valor até chegar ao final com o resultados do numero
//a saida impressa será 15

//Reduce trabalha como se fosse um for e vai rodando e incrementando os valores do array
//por mim vai somando até chegar até o ultimo

//Carrinho exemplo com reduce

const carrinho = [
  { produto: "Feijão", preco: 7.89, quantidade: 3 },
  { produto: "Arroz", preco: 4.98, quantidade: 5 },
  { produto: "Leite 1L", preco: 6.99, quantidade: 2 },
];

const totalParaPagar = carrinho.reduce((acumulador, item) => {
  return item.preco * item.quantidade + acumulador;
}, 0);

console.log(totalParaPagar);
