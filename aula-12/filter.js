//FILTER

const valores = [39,45,32,24,4,22,2,49,23,8];

const parEncontrado = valores.filter((valor) => valor %2 === 0);

console.log(parEncontrado);

//FILTER VAI TRAZER EM UM NOVO ARRAY, APENAS NUMEROS PARES.


const alunos = [
    {nome: "Quinn", media: 96},
    {nome: "Hanna", media:84},
    {nome: "Sarah Fear", media: 100},
    {nome: "Nicholas", media: 65},
    {nome: "Josh", media:90},
    
];


const alunosComMediaSuperior = alunos.filter((aluno) => aluno.media > 85);

console.log(alunosComMediaSuperior);

//filter consegue filtrar parametros especificos que você colocar.

