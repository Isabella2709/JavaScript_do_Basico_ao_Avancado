const numeros = [40, 34, 67, 89, 23, 10];

const novoarray = numeros.map((elemento) => {
  return elemento * 2;
});

console.log(novoarray);

console.clear();

const estoque = [
  { produto: "Feijão", preco: 8.2, quantidade: 23 },
  { produto: "Arroz", preco: 25.9, quantidade: 30 },
  { produto: "Leite Caixa", preco: 44.9, quantidade: 20 },
];

const valorestoque = estoque.map((itemcarr) => {
  return {
    ...itemcarr,
    total: itemcarr.preco * itemcarr.quantidade,
  };
});

console.log(valorestoque);

