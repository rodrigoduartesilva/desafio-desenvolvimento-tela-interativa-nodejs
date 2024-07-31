const pressionarEnter = require("./pressionarEnter");

// Quando executada, esta função informa ao jogador se ele venceu o combate ou se perdeu
// Se perdeu, a aplicação será encerrada com a mensagem de Game Over!
function exibirResultadoBatalha(jogador, oponente) {

    // Se ao final da batalha, a vida do jogador for maior que 0 e a do oponente for menor que 1
    // O if será executado informando que o jogador venceu o combate
    if (jogador.vida > 0 && oponente.vida < 1) {

        console.log(`É isso!!! Você venceu!!!`);
        console.log('\n');

        // No entanto, se a vida do jogador zerar junto com a do oponente, teremos um empate
        // Caso um empate ocorra de fato, a contenda será decidida com uma nova jogada onde o jogador escolherá
        // Par ou impar novamente, caso ele acerte o valor, ele ganha a partida, caso contrário, ele perderá e a aplicação será finalizada com a respectiva mensagem de Game Over!
        // Do modo como a aplicação foi desenvolvida, atualmente esse if não será executado por nao ter uma condiçao propicia para o empate, no futuro, pretendo melhorar esse codigo e tornar esse trecho possivel de execução
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