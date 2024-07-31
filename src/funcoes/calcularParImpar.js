const exibirResultadoBatalha = require('./exibirResultadoBatalha');

//Usando a biblioteca prompt-sync para criar uma interação via teclado.
const prompt = require('prompt-sync')();

// Durante os combates dentro da história do jogo, essa função é chamada para calcular um valor entre 1 e 10
// A função pega esse numero e informa se é par ou impar, o valor é usado em relação a escolha do jogador dentro da aplicação
function calcularParImpar(jogador, oponente) {

    do {

        // Declaração da variavel 'resultado', esta recebe um valor randomico (Math.randon()) entre e 1 e 10
        // retornando um texto 'Par' ou 'Impar', tudo isso encapsulado pela função Math.floor, essa função da biblioteca Math, possibilita o arredondamento do valor, evitando assim, números não inteiros.
        let resultado = (Math.floor(Math.random() * 10) + 1) % 2 == 0 ? 'Par' : 'Impar';
        let opcao;

        // Esse laço de repetição é uma validação da entrada numerica onde é solicitado ao usuário que escolha entre dois valores
        // Caso o valor digitado não seja um dos dois numeros esperados, uma mensagem de 'opcao invalida' é impressa no terminal
        // O laço só termina quando um valor válido é informado
        do {
            opcao = +prompt('Digite: 1 - Ímpar | 2 - Par: ');
            console.log('\n');

            if (opcao !== 1 && opcao !== 2) {
                console.log('Opção inválida!');
                console.log('\n');
            }
        } while (opcao != 1 && opcao != 2);

        switch (opcao) {
            case 1:
                console.log(`${jogador.nome} selecionou a opção Ímpar!`);
                console.log('\n');
                console.log(`${oponente.nome} ficou com a opção Par!`);

                // Se o jogador escolheu 'impar', ele entrará nesse if e o oponente perde pontos de vida, caso contrário, o else é executado
                // e o jogador perderá pontos de vida
                if (resultado == 'Impar') {
                    oponente.defender(jogador.forca);
                } else {
                    jogador.defender(oponente.forca);
                }
                break;
            case 2:
                console.log(`${jogador.nome} selecionou a opção Par!`);
                console.log('\n');
                console.log(`${oponente.nome} ficou com a opção Ímpar!`);

                if (resultado == 'Impar') {
                    jogador.defender(oponente.forca);
                } else {
                    oponente.defender(jogador.forca);
                }
                break;
        }

        console.log('\n');
        console.log(`Resultado do sorteio: ${resultado}`);

        jogador.statusPersonagem();
        oponente.statusPersonagem();

    } while (jogador.vida > 0 && oponente.vida > 0);

    // Função chamada para informaar ao jogador se ele venceu ou perdeu a batalha
    // Caso tenha perdido, a aplicação será finalizada
    exibirResultadoBatalha(jogador, oponente);

}

module.exports = calcularParImpar;