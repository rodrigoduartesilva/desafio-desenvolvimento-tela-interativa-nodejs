const iniciarPrologo = require('./src/funcoes/capitulos/iniciarPrologo.js');
const criarPersonagem = require('./src/funcoes/criarPersonagem.js');
const exibirIntroducao = require('./src/funcoes/exibirIntroducao.js');
const exibirMensagemInicial = require('./src/funcoes/exibirMensagemInicial.js');
const pressionarEnter = require('./src/funcoes/pressionarEnter.js');


// Mensagem inicial
exibirMensagemInicial();

//exibirIntroducao();

pressionarEnter();

let jogador = criarPersonagem();

iniciarPrologo(jogador);