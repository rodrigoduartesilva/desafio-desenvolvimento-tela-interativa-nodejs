const pressionarEnter = require('./pressionarEnter.js');
const criarPersonagem = require('./criarPersonagem.js');

const iniciarPrologo = require('./capitulos/iniciarPrologo.js');
const iniciarCapUm = require('./capitulos/iniciarCapUm.js');
const iniciarCapDois = require('./capitulos/iniciarCapDois.js');
const iniciarCapTres = require('./capitulos/iniciarCapTres.js');
const iniciarCapQuatroParteUm = require('./capitulos/iniciarCapQuatroParteUm.js');
const iniciarCapQuatroParteDois = require('./capitulos/iniciarCapQuatroParteDois.js');
const iniciarCapQuatroParteFinal = require('./capitulos/iniciarCapQuatroParteFinal.js');

// Função principal onde engloba a criaçao do personagem assim como a execução de casa capitulo do jogo
function main() {

    let jogador = criarPersonagem();

    pressionarEnter();

    // Chamada das funções que se referem a cada capitulo da história contada na aplicação
    iniciarPrologo(jogador);
    iniciarCapUm(jogador);
    iniciarCapDois(jogador);
    iniciarCapTres(jogador);
    iniciarCapQuatroParteUm(jogador);
    iniciarCapQuatroParteDois(jogador);
    iniciarCapQuatroParteFinal(jogador);

}

module.exports = main;