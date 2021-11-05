/* process.stdout.write("Alguma coisa \n\n\n"); */ // Esse comando serve para imprimir no terminal, funciona parecido com o console.log().

const questions = [

    "O que aprendi hoje ?",
    "O que me deixou aborrecido ?, E o que eu poderia fazer para melhorar ?",
    "O que me deixou feliz hoje ?",
    "Quantas pessoa ajudei hoje ?"

]

const ask = (index = 0) => {  // Arrow function que está sendo passado como parametro o nome do arquivo index, a posição 0, e chamando a o array question[index], ou seja estamos pegando aqui a 1 posição do array, e quebrando linha com o \n .

    process.stdout.write("\n\n" + questions[index] + " > ");
    
}

ask(); // Aqui a função é chamada.

const answers = [];

process.stdin.on("data", data => { // Arrow function, que está com ocomando stdin.on() que serve para capturar os dados no terminal .

    /* Aqui o comando está fazendo o mesmo que a linha comentada abaixo, e colocando as respostas no array com o comando push. */
    /* Aqui estamos pegando os dados digitados via terminal, tranformando em String com o comando toString(), e eliminando os espaços com o comando trim(). */
    answers.push(data.toString().trim() + "\n");

    if(answers.length < questions.length) {

        ask(answers.length) // Aqui se está condição for atendida, a função ask(), vai receber todas as respostas que foram inseridas no terminal, para ser imprimida no terminal. 

    }else {

        console.log(answers);
        process.exit(); // Esse comando/função fecha a entrada de dados do terminal após a inserção do dado.
    }

    /* Aqui estamos pegando os dados digitados via terminal, tranformando em String com o comando toString(), e eliminando os espaços com o comando trim(). */
   /* process.stdout.write(data.toString().trim() + "\n"); */

   /* process.exit(); */ // Esse comando/função fecha a entrada de dados do terminal após a inserção do dado. 

});

/* Aqui nesta Arrow function estamos colocando um ouvinte de eventos process.on(), para que quando a função exit for acionada, ele vai implementar no terminal esse pequeno menu setado com as respostas que foram digitadas */

process.on('exit', () => {

    console.log(`
        Bacana Macmiller!
        
        O que você aprendeu hoje foi:
        ${answers[0]}
        
        O que te aborreceu e você poderia melhorar foi:
        ${answers[1]}
        
        O que te deixou feliz hoje:
        ${answers[2]}
        
        Você ajudou ${answers[3]} pessoas hoje !!
        
        Volte amanhã para novas reflexões`
    );
});
