// Aqui estamos fazendo a requisição do arquivo flags, e o oq lá se encontra.
const getFlagValue = require('./flags'); 

// aqui está sendo impresso no terminal, chamando a função getFlagValue e passando os argumentos que foi setado no própio terminal do node abaixo.
console.log(`Oi ${getFlagValue('--name')}. ${getFlagValue('--greeting')}. ${getFlagValue('--greeting2')}`); 

// esta linha acima está chamando o que já foi setado no terminal .. que foi setado isso .. node greetings --name "Macmiller" --greeting  "você está de boa ?" --greeting2 "sussa então ;) !"

// a qual o resultado vai ser esse para este exemplo .. Oi Macmiller . você é um cara muito esforçado . e sera recompensado pelo seu esforço ! ;) !