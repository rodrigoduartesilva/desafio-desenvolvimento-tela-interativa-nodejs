const exibirIntroducao = require("./exibirIntroducao");
const exibirMensagemInicial = require("./exibirMensagemInicial");
const main = require("./main");
const pressionarEnter = require("./pressionarEnter");

// Funçao assincrona chamada no inicio da aplicação, esta função engloba a chamada das funções necessárias
// para criar a sensação de sequencia dentro da aplicação
// Esta função deve ser assincrona devido a chamada da funcao exibirIntroducao, esta funcao também é assincrona
//o 'await' usado na chamda dela, informa que o resto do corpo da função só será executado quanto todo o conteudo de exibirIntroducao for executado
async function iniciarTextGame() {

    exibirMensagemInicial();
    pressionarEnter();
    await exibirIntroducao();
    pressionarEnter();
    main();

}

module.exports = iniciarTextGame;