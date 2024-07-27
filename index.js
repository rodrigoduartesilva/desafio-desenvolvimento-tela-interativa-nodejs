const prompt = require('prompt-sync')();

const exibirIntroducao = require('./src/funcoes/exibirIntroducao');
const pressionarEnter = require('./src/funcoes/pressionarEnter');
const selecionarSexoDoPersonagem = require('./src/funcoes/selecionarSexoDoPersonagem');


//const Heroi = require('./personagens/heroi.js');
//const Vilao = require('./personagens/vilao1.js');

//const fase1 = require('./fases/fase1.js');
//const fase2 = require('./fases/fase2.js');
//const fase3 = require('./fases/fase3.js');
//const faseFinal = require('./fases/faseFinal.js');

// Introdução
console.log('LUTADORES - TEXT GAME');
console.log('\n');
console.log('Bem-vindo ao LUTADORES, um emocionante text game onde você controlará poderosos lutadores em batalhas épicas.');
console.log('\n');
console.log('Prepare-se para testar suas habilidades estratégicas e se divertir ao máximo!');
console.log('\n');

//exibirIntroducao();

pressionarEnter();

console.log('Crie seu personagem!!');
console.log('\n');
const nomePersonagem = prompt('Digite o nome do seu personagem: ');
console.log('\n');

selecionarSexoDoPersonagem();

