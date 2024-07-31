const exibirIntroducao = require("./exibirIntroducao");
const exibirMensagemInicial = require("./exibirMensagemInicial");
const main = require("./main");
const pressionarEnter = require("./pressionarEnter");

async function iniciarTextGame() {

    exibirMensagemInicial();
    pressionarEnter();
    await exibirIntroducao();
    pressionarEnter();
    main();

}

module.exports = iniciarTextGame;