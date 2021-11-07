const { inherits } = require('util'); // Aqui esta sendo usado a função inherits dentro de uma const, essa função serve para herdar algum parametro, também está sendo passdo o require que serve para requere algo, e sendo passado uma string 'util', que serve como um parametro reservado.

const { EventEmitter} = require('events'); // Aqui está sendo usado a função EventEmitter dentro da const, essa função serve para emitir um evento, em seguida está o require('events) que está requisitando esse evento.

function Character(name) { // aqui está sendo setado uma função Character e passado um parametro (name).

    this.name = name; // Aqui estamos setando o parametro name acima, padrão para poder usar este parametro na orientação a objeto.

}

inherits(Character, EventEmitter); // Aqui está sendo setado na função inherits os parametros Character da função acima, e o EventEmitter que é a função que emiti um evento, também declarada acima.

const chapolin = new Character('chapolin'); // Aqui está sendo declarada a const chapolin e declarando ela como o método new, que referência Chapolin como um novo objeto, e já esta sendo passado a este novo objeto o parametro 'chapolin',  que disz respeito a variavel abaixo.

chapolin.on('help', () => console.log(`Eu o ${chapolin.name} colorado !`)); // Aqui está sendo usado a função on() que serve para executar o parametro nela passado, neste caso o 'help', dentro de parametro on(), foi declarada uma arrow function com um console.log(), dentro está sendo setado uma frase e usado o ${chapolin.name}, que está herdando atrvés da function Character o parametro (name), que lá está sendo passado. 

console.log('Oh, e agora quem podera me defender ?');
chapolin.emit('help'); // Aqui está sendo usado a função emit(), que serve para emitir um evento, atrvés do parametro que está sendo passado 'help'.