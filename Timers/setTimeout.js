// setTimeout vai rodar uma função depois de x milessegundos.

const timeOut = 3000;

const finished = () => console.log('done !');

setTimeout(finished, timeOut); // Primeiramente temos o função setTimeou que serve para controlar o tempo, em seguida está sendo passado a variavel finished para impressão no terminal, e a variavel timeout com a definição do tempo de 3000 mlsegundos, que equivale a 3 segundos para excução.

console.log('Mostar');