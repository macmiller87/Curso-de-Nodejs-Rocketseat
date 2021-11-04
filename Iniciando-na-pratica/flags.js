// Aqui estamos criando está função e passando um parametro flag como String

function getFlagValue(flag) {

    const index = process.argv.indexOf(flag) + 1 ; // aqui estamos setamos uma const com o método process.argv, e o método indexOf(flag) + 1, que neste caso vai pegar a posição final do parametro process.argv.
    return process.argv[index]; // aqui estamos retornando o valor que já foi encontrado e está na const index.

}

module.exports = getFlagValue; // aqui estamos exportando a função acima.