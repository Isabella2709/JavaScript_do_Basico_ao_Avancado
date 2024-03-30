//Object Literal

const pessoa = {
  nome: "Isabella Ribas",
  idade: 22,
  altura: 1.64,
  ehprogrm: true,
  funcao: () =>{
    console.log("Esses são os componentes, obrigada por me chamar");
  }
};

console.log(pessoa);

console.log(pessoa.nome);

pessoa.profissao ="Full Stack Developer"; //Adiciona um valor ao objeto pessoa
console.log(pessoa);

delete pessoa.altura; //deleta um componente do objeto 
console.log(pessoa);

pessoa.funcao();

let idade = 22;
let altura = 1.64;

let objeto = {
    idade,
    altura,
};

console.log(objeto);

const {nome} = pessoa;

console.log(nome);

// Javascript objects
