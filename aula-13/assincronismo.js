const fs = require("fs");

//callbacks

//Funções assincronas eles executam primero o que é mais rapido de ser lido e apos dar
//o tempo do arquivo ser lido, ele retorna para ler o que tinha deixado em stand by


console.log("Antes de ler a funcao");

//Funções assincronas levam um tempo
fs.readFile('aula-13/arquivo.txt', (erro, conteudo) =>{
    if(erro){
        console.log("Ocorreu um erro ao tentar ler o arquivo.", erro);
    }else{
        console.log("Leitura feita com sucesso",String(conteudo));
    }
});

console.log("Depois da função que leu o arquivo");


//os consoles.log sera exectuado antes da funcao de ler o arquiv

console.log("Antes do set Time out")

setTimeout(() => {
  console.log("Isso aqui vai ser executado apos 2 segundos");
}, 2 * 1000);



console.log("Depois do set time out");

// promisses  (Promessas)

console.log("Antes da crianção da promesse")

const promessa = new Promise((resolve, reject) =>{
    fs.readFile('aula-13/arquivo.txt', (erro, conteudo) =>{
        if(erro){
            reject("Ocorreu um erro ao tentar ler o arquivo.", erro);
        }else{
            resolve(String(conteudo));
        }
    });
}); 

//Foco a partir daqui, a execucao da promessa 

promessa.then((retornodoresolve) => {
    console.log("Deu certo: ", retornodoresolve);
}).catch((erro) =>{
    console.log("Deu erro", erro);
}).finally(() =>{
    console.log("Isso aqui vai ser executado independente do resultado do final.")
});

//Tambem é possivel fazer o arquivo ser executado linha a linha
//atraves do await com o try ,catch




