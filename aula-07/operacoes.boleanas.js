const n1 = 10;
const n2 = 20;

console.log(n1 == n2);
//compara se os componentes são iguais, retornara : false

console.log(n1 === n2);
//compara se eles são identicos, compara conteudo e ou tipo, retornara : false

console.log(n1 == "10");
// compara se os valores são iguais não identicos

console.log(n1 === "10");
// diferente porque um é numero e o outro é string; Retornara: false

console.log(n1 != "10");
// assim compara se ele é diferente. Retornara : true

console.log(n1 >= n2);
// compara se ele é maior que outro (>=) maior ou igual; retornara false

let idade1 = 20;
let idade2 = 39;

console.log(idade1 >= 18 && idade2 >=18); // && os dois tem que ser verdadeiros para sair true
console.log(idade1 >= 18 || idade2 >= 18); // um deles tem que ser verdadeiro, para sair true
// coloca duas comparações logicas; retornara true;








