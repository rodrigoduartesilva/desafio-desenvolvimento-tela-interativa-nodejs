const pressionarEnter = require("../pressionarEnter");

function iniciarCapQuatroParteDois(jogador) {

    let cocatriz = jogador.sexo == 'Masculino' ? 'franguinho' : 'franguinha';
    let nomeItem = jogador.specialCoin > 0 ? 'a Special Coin' : 'o Whey Protein';

    console.log('\n');
    console.log(`***** Inicio do Capitulo 4 - Parte 2 *****`);
    console.log('\n');

    console.log(`Filho! Por que você fugiu de casa!!?? E ainda por cima, levou Samira - A gata! Disse tio Jeremias.`);
    console.log('\n');
    console.log(`${jogador.nome} sem acreditar então exclama: Samira!!!`);
    console.log('\n');
    console.log(`Agora tudo realmente fazia sentido, por isso tio Jeremias tinha a caminha de gato que sempre dizia ser dela! Era tudo verdade!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Você não queria deixar eu fazer teste pra participar do *NSync!! Disse Magnanimus.`);
    console.log('\n');
    console.log(`Então fugi e levei Samira - A gata, pois ela é minha! Fiz o teste e não passei, mas pelo menos estava livre de sua opressão! Completou Magnanimus.`);
    console.log('\n');
    console.log(`Perdão filho, eu estava errado, quero apenas que você e Samira - A gata, voltem pra casa!`);
    console.log('\n');
    console.log(`Jamais! Respondeu Magnanimus.`);
    console.log('\n');
    console.log(`E agora você ${cocatriz} sentirá toda a minha fúria! Lute!! Finalizou o vilão.`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`${jogador.nome} havia perdido muitos pontos de vida durante as batalhas do torneio, a fraqueza tomou conta de seu corpo.`);
    console.log('\n');
    console.log(`Então, uma lembrança do primeiro encontro com Magnanimus veio a sua cabeça.`);
    console.log('\n');
    console.log(`E aos gritos, ${jogador.nome} fala: No dia mais claro, na noite mais densa, o mal sucumbirá ante minha presença. Todo aquele que venera o mal há de penar quando o poder d${nomeItem} enfrentar!`);
    console.log('\n');
    console.log(`E então, ${jogador.nome} usa ${nomeItem}!`);
    console.log('\n');


    if (jogador.specialCoin > 0) {

        jogador.restaurarVida(1);

    } else {

        jogador.restaurarVida(2);

    }

    jogador.statusPersonagem();


    console.log('\n');
    console.log(`***** Fim da parte 2 *****`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');

}

module.exports = iniciarCapQuatroParteDois;