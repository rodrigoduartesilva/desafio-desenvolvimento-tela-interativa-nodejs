const prompt = require('prompt-sync')();

const Jogador = require('../classes/Jogador.js');
const selecionarSexoDoPersonagem = require('../funcoes/selecionarSexoDoPersonagem.js');

// Essa função cria um personagem que o jogador usará durante o uso da aplicação
function criarPersonagem() {
    console.log('\n');
    console.log('Crie seu personagem!!');
    console.log('\n');
    let nomePersonagem = '';
    let isNomeValido = false;

    // Um laço usado para validar a entrada de dados via teclado, onde é informado que é possivel apenas a entrada de letras, impossibilitando assim, a digitação de numeros
    while (!isNomeValido) {

        try {

            nomePersonagem = prompt('Digite o nome do seu personagem: ');
            // Nesse if, é testado uma expressão regultar, o teste verifica se os valores digitados estao entre
            // a-z (minusculos) e A-Z (maiusculos), qualquer valor fora desse intervalo, é instanciando um espaço na memoria e armazenado numa variavel chamada 'error'
            // e logo a frente, no 'catch', é impresso dentro de um console.error
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

    // Chamada da função que possibilita o jogador escolher o sexo do personagem
    const sexo = selecionarSexoDoPersonagem();
    console.log('\n');
    let pontoDeForca = 20;
    let vida = 100;
    let specialCoin = 0;
    let wheyProtein = 0;

    sexo === 'Masculino' ? console.log(`O lutador ${nomePersonagem} terá inicialmente ${pontoDeForca} pontos de força.`) : console.log(`A lutadora ${nomePersonagem} terá inicialmente ${pontoDeForca} pontos de força.`);

    // Instancia da classe Jogador que será armazenada numa variavel chamada jogador
    // Em jogador, é criado um objeto de Jogador, que a partir daqui, será modificado de acordo com os acontecimentos do jogo durante sua execução
    const jogador = new Jogador(nomePersonagem, sexo, pontoDeForca, vida, specialCoin, wheyProtein);

    // Chamada do método statusPersonagem onde os dados do mesmo será impresso no termninal
    jogador.statusPersonagem();

    return jogador;
}


module.exports = criarPersonagem;