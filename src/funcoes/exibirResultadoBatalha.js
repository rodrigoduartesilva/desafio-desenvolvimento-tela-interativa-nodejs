const pressionarEnter = require("./pressionarEnter");

function exibirResultadoBatalha(jogador, oponente) {

    if (jogador.vida > 0 && oponente.vida < 1) {

        console.log(`É isso!!! Você venceu!!!`);
        console.log('\n');

    } else if (jogador.vida == 0 && oponente.vida == 0) {

        console.log(`Luta empatada!`);
        console.log('\n');
        console.log('Dica 1: No caso de empate, o vencedor será decidido por sorteio.');
        console.log('\n');
        console.log('Dica 2: Apos apertar ENTER, o sorteio será realizado e então, o nome do vencedor será impresso.');
        console.log('\n');
        pressionarEnter();
        let resultado = (Math.floor(Math.random() * 10) + 1) % 2 == 0 ? jogador.nome : oponente.nome;

        if (resultado == jogador.nome) {

            console.log('\n');
            console.log(`É isso!!! Você venceu!!!`);

        } else {

            console.log(`Você perdeu!`);
            console.log(`${oponente.nome} venceu!!`);
            console.log(`GAME OVER!!`);
            process.exit(1); // 1 é um código de erro genérico

        }

    } else {

        console.log(`Você perdeu!`);
        console.log(`${oponente.nome} venceu!!`);
        console.log(`GAME OVER!!`);
        process.exit(1); // 1 é um código de erro genérico

    }

}

module.exports = exibirResultadoBatalha;