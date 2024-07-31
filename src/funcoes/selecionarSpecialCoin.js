const prompt = require('prompt-sync')();

function selecionarSpecialCoin(jogador, cocatriz) {
    let validaWhile = true;

    do {

        const opcao = +prompt('Selecione um dos itens a seguir: 1 - Special Coin | 2 - Whey protein: ');

        switch (opcao) {
            case 1:
                console.log('\n');
                console.log(`Você obteve uma special coin! Escolha genial... ...${cocatriz}`);
                jogador.specialCoin += 1;
                validaWhile = false;
                break;
            case 2:
                console.log('\n');
                console.log(`Você obteve um balde de whey protein... mano... sério isso?`);
                console.log('\n');
                console.log('Whey protein quando usado, restaura 10 de vida!');
                jogador.wheyProtein += 1;
                validaWhile = false;
                break;
            default:
                console.log('\n');
                console.log('Opção inválida!');
                break;
        }

    } while (validaWhile);

}

module.exports = selecionarSpecialCoin;