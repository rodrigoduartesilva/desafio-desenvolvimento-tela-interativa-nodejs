const iniciarCapDois = require('./src/funcoes/capitulos/iniciarCapDois.js');
const iniciarCapTres = require('./src/funcoes/capitulos/iniciarCapTres.js');
const iniciarCapUm = require('./src/funcoes/capitulos/iniciarCapUm.js');
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

pressionarEnter();

//iniciarPrologo(jogador);
//iniciarCapUm(jogador);
//iniciarCapDois(jogador);
iniciarCapTres(jogador);