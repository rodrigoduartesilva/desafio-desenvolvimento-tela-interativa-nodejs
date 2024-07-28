const prompt = require('prompt-sync')();

const Jogador = require('../classes/Jogador.js');
const selecionarSexoDoPersonagem = require('../funcoes/selecionarSexoDoPersonagem.js');

function criarPersonagem() {

    console.log('\n');
    console.log('Crie seu personagem!!');
    console.log('\n');
    const nomePersonagem = prompt('Digite o nome do seu personagem: ');
    console.log('\n');

    const sexo = selecionarSexoDoPersonagem();
    console.log('\n');
    let pontoDeForca = 20;
    let vida = 100;
    let forcaAtaqueEsp = 0;

    sexo == 'Masculino' ? console.log(`O lutador ${nomePersonagem} terá inicialmente ${pontoDeForca} pontos de força.`) : console.log(`A lutadora ${nomePersonagem} terá inicialmente ${pontoDeForca} pontos de força.`);

    const jogador = new Jogador(nomePersonagem, sexo, pontoDeForca, vida, forcaAtaqueEsp);

    jogador.statusPersonagem();

    return jogador;
}

module.exports = criarPersonagem;