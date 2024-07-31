const pressionarEnter = require('./pressionarEnter.js');
const criarPersonagem = require('./criarPersonagem.js');

const iniciarPrologo = require('./capitulos/iniciarPrologo.js');
const iniciarCapUm = require('./capitulos/iniciarCapUm.js');
const iniciarCapDois = require('./capitulos/iniciarCapDois.js');
const iniciarCapTres = require('./capitulos/iniciarCapTres.js');
const iniciarCapQuatroParteUm = require('./capitulos/iniciarCapQuatroParteUm.js');
const iniciarCapQuatroParteDois = require('./capitulos/iniciarCapQuatroParteDois.js');
const iniciarCapQuatroParteFinal = require('./capitulos/iniciarCapQuatroParteFinal.js');

function main() {

    let jogador = criarPersonagem();

    pressionarEnter();

    iniciarPrologo(jogador);
    iniciarCapUm(jogador);
    iniciarCapDois(jogador);
    iniciarCapTres(jogador);
    iniciarCapQuatroParteUm(jogador);
    iniciarCapQuatroParteDois(jogador);
    iniciarCapQuatroParteFinal(jogador);

}

module.exports = main;