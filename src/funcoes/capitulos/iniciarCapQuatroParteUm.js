const pressionarEnter = require("../pressionarEnter");

function iniciarCapQuatroParteUm(jogador) {

    let cocatriz = jogador.sexo == 'Masculino' ? 'franguinho' : 'franguinha';

    console.log('\n');
    console.log(`***** Inicio do Capitulo 4 - Parte 1 *****`);
    console.log('\n');

    console.log(`...Magnanimus Birigogilson de Souza...`);
    console.log('\n');
    console.log(`Magnanimus então fala: Olá! ${cocatriz}, quanto tempo!!! (Dois dias se passaram apenas!)`);
    console.log('\n');
    console.log(`Eu serei seu oponente nessa ultima batalha, me vença, e ganhará seu tão sonhado prêmio!`);
    console.log('\n');
    console.log(`${jogador.nome} estava sem forças, mas quando pensou em falar qualquer coisa, tio Jeremias grita do lado da arena: Filho?? É Você!!??`);
    console.log('\n');
    console.log(`É minha gente, isso aqui virou Casos de Familia, cadê a Cristina Rocha?`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`${jogador.nome} ouvindo aquilo, entendeu por que Magnanimus parecia tão familiar!`);
    console.log('\n');
    console.log(`Tio Jeremias tinha um filho que havia fugido de casa quando era adolescente, ${jogador.nome} conhecia toda a história, mas jamais chegou a conhecer seu primo.`);
    console.log('\n');
    console.log(`Tio Jeremias também evitava tocar no assunto, isso o deixava muito triste!`);
    console.log('\n');
    console.log(`Sendo assim, o verdadeiro nome de Magnanimus Birigogilson de Souza era...`);
    console.log('\n');
    console.log(`...Esteliosvaldo Birigogilson da Silva (Luzes brilhando ao redor do nome!)`);
    console.log('\n');
    console.log(`Não me chame desse nome!! Gritou Magnanimus, agora Esteliosvaldo!`);

    console.log('\n');
    console.log(`***** Fim da parte 1 *****`);
    console.log('\n');
    pressionarEnter();

}

module.exports = iniciarCapQuatroParteUm;