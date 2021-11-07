// clearInterval irá cancelar um setInterval registrado.

const timeOut = 1000;

const checking = () => console.log('checking !');

let interval = setInterval(checking, timeOut);

/* clearInterval(interval); */ // Aqui está sendo usado a função clearInterval que serve para cancelar um setInterval registardo acima.

setTimeout(() => clearInterval(interval), 4000); // Aqui está sendo usado a função setTimeout e sendo passado dentro dela a função clearInterval() com o parametro interval e o temo de definição de 3000 mlsgundos, equivalente à 3 segundos, que essa linha de comando vai cancelar o setInterval acima .