

const prompt = require("readline-sync");

/*
let saldo = Number(prompt.question("Qual e o seu saldo: "));

while (saldo < 0) {
  saldo = Number(
    prompt.question(
      "Saldo invalido, o valor não pode ser negativo, digite novamente: "
    )
  );
}
*/
/*enquanto o valor da varivel saldo for menor do que zero, ele pergunta novamente
até conseguir um numero possitivo*/


//console.log(saldo);

//PROGRAMA DO SALDO 

/*

let notaDoAluno = Number(prompt.question("Informe a nota do aluno: "));

let somaDasNotas = 0; //acumulador
let qtdnotas = 0; //acumulador de notas digitadas 

while(notaDoAluno >= 0){
    somaDasNotas = (somaDasNotas + notaDoAluno); // incremento o acumulador (soma das notas);
    qtdnotas = qtdnotas + 1;
    notaDoAluno = Number(prompt.question("Informe a proxima nota: "));
}

console.log(somaDasNotas);
console.log(qtdnotas);

console.log("Media das notas dos alunos: "+ somaDasNotas / qtdnotas);
*/

//PROGRAMA DAS NOTAS

/*

const numeroaleatorio = parseInt(Math.random() * 10);

let numerodouser = Number(prompt.question("Informe o numero entre zero e 10: "));

console.log(numeroaleatorio);

while(numeroaleatorio !== numerodouser){
    console.log("Você errou o numero, tente novamente");

    numerodouser = Number(prompt.question("Informe um numero entre 0 e 10: "));
}

console.log("Parabéns, você acertou o numero, o numero é: "+numeroaleatorio);

*/

//Joguinho dos numeros


let c = 0;

while(c < 5){
    console.log(c);

    if(c === 2){
        break; // se quiser sair do loop se a condicao for verdadeira.
    }

    //se quiser que o loop continue, colocar o continue.

   // é uma opcao mas não é muito recomendada 

    console.log("Depois do if.....")

    c++;
}


//Programinha do contador com while e com if.

// DO WHILE


//existe o do while, que ele faz a comparacao no final.


let n = parseInt(prompt("Digite: "))





