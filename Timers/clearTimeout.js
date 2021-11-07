// clearTimeout cancela um timeOut

const timeOut = 3000;

const finished = () => console.log('done !');

let timer = (setTimeout(finished, timeOut)); // Aqui estamos guardano na variavel timer a definição dos comandos acima.
clearTimeout(timer); // Aqui estamos usando a função clearTimeou e passando a variavel timer para a função clearTimeout cancelar o texto ('done !'), que foi pedido acima para ser impresso no termianal.