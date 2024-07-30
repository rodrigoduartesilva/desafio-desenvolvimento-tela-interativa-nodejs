const exibirResultadoBatalha = require('./exibirResultadoBatalha');

const prompt = require('prompt-sync')();

function calcularParImpar(jogador, oponente) {

    do {

        let resultado = (Math.floor(Math.random() * 10) + 1) % 2 == 0 ? 'Par' : 'Impar';
        let opcao;

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

    exibirResultadoBatalha(jogador, oponente);

}

module.exports = calcularParImpar;