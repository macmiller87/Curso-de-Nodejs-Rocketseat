
// Modulos nativos
// Comando require serve para receber um tipo de requisição de uma função ou arquivo que seja.

const path = require('path');

// Caminho completo + nome do arquivo
console.log(path.basename(__filename));


// Meus Modulos
// Neste exemplo está sendo recebido os dados do arquivo exports.js, através dessa requisição abaixo
// const myModule = require('./exports');

// console.log(myModule);

const myModuleName = require('./exports');

console.log(myModuleName);