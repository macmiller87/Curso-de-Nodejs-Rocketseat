const  { EventEmitter } = require('events'); // Aqui está sendo setado a função EventEmitter, que é uma função interna do Nodejs, e está sendo usado também o require que seve para requisitar algo, em seguida o require('events'), está requisitando um evento.

const ev = new EventEmitter(); // Foi criado uma variavel para receber a função EventEmitter com os parametros acima.

ev.once('saySomething', (message) => { // // Aqui está sendo usado a variavel acima com o função once() que serve para ouvir o evento abaixo apenas 1 vez, diferente da ev.on() que vai ouvie qualquer evento a ele relacionado, e sendo passado os parametros definidos abaixo na ev.mit(), e a mensagem pré setada do console.log() .

    console.log('Eu ouvi você: ', message);

})

ev.on('saySomething', (message) => { // Aqui está sendo usado a variavel acima com o função on() e sendo passado os parametros definidos abaixo na ev.mit(), e a mensagem pré setada do console.log() .

    console.log('Eu ouvi você: ', message);

});

ev.emit('saySomething', 'Macmiller !'); // Aqui está sendo usado a variavel ev, e está sendo usado a função emit(), que seve para emitir um evento/ou eventos que é imprimido na função acima ev.on(), qu e reconhece pelos parametors aqui definidos e la passados.



