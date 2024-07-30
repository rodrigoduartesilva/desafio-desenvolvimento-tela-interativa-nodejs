const prompt = require('prompt-sync')();

const Jogador = require('../classes/Jogador.js');
const selecionarSexoDoPersonagem = require('../funcoes/selecionarSexoDoPersonagem.js');

function criarPersonagem() {
    console.log('\n');
    console.log('Crie seu personagem!!');
    console.log('\n');
    let nomePersonagem = '';
    let isNomeValido = false;

    while (!isNomeValido) {

        try {

            nomePersonagem = prompt('Digite o nome do seu personagem: ');
            if (!/^[a-zA-Z\s]+$/.test(nomePersonagem)) {
                throw new Error('Nome inválido! Digite apenas letras.');
            }
            isNomeValido = true;

        } catch (error) {

            console.log('\n');
            console.error(error.message);
            console.log('\n');
            console.log('Por favor, insira um nome válido composto apenas por letras.');
            console.log('\n');

        }

    }

    console.log('\n');

    const sexo = selecionarSexoDoPersonagem();
    console.log('\n');
    let pontoDeForca = 20;
    let vida = 100;
    let forcaAtaqueEsp = 0;
    let specialCoin = 0;
    let wheyProtein = 0;

    sexo === 'Masculino' ? console.log(`O lutador ${nomePersonagem} terá inicialmente ${pontoDeForca} pontos de força.`) : console.log(`A lutadora ${nomePersonagem} terá inicialmente ${pontoDeForca} pontos de força.`);

    const jogador = new Jogador(nomePersonagem, sexo, pontoDeForca, vida, forcaAtaqueEsp, specialCoin, wheyProtein);

    jogador.statusPersonagem();

    return jogador;
}


module.exports = criarPersonagem;