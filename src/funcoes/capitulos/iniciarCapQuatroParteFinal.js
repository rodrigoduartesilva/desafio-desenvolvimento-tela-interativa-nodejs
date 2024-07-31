const prompt = require('prompt-sync')();

const Oponente = require("../../classes/Oponente");
const calcularParImpar = require("../calcularParImpar");
const pressionarEnter = require("../pressionarEnter");

function iniciarCapQuatroParteFinal(jogador) {

    let cocatriz = jogador.sexo == 'Masculino' ? 'franguinho' : 'franguinha';
    let opcao;

    console.log('\n');
    console.log(`***** Inicio do Capitulo 4 - Parte Final *****`);
    console.log('\n');

    console.log(`${jogador.nome} se sentia mais confiante.`);
    console.log('\n');
    console.log(`Vamos primo! Hora de lutar! Gritou ${jogador.nome}.`);
    console.log('\n');
    const magnanimus = new Oponente('Magnanimus', 'Masculino', 100, 5);
    console.log(`Vou te destruir ${cocatriz}! Completou ${magnanimus.nome}`);
    console.log('\n');
    console.log(`Então o juiz finalmente grita: Lutem!!!`);
    console.log('\n');
    console.log(`Em um canto mais escuro, um ser felino observava tudo...`);
    console.log('\n');
    console.log(`Então, a luta tem inicio.`);
    console.log('\n');

    calcularParImpar(jogador, magnanimus);

    console.log('\n');
    console.log(`Você conseguiu!! Um incrédulo ${magnanimus.nome} indaga.`);
    console.log('\n');
    console.log(`Acabou primo! Volte conosco pra casa! Traga também Samira - A gata! Disse ${jogador.nome}`);
    console.log('\n');
    console.log(`Tio Jeremias chorava, e pedia para que ${magnanimus.nome} voltasse.`);
    console.log('\n');
    console.log(`Do canto mais escuro, surge então com toda sua majestade, Samira - A gata.`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Ela olha em volta e então diz: Miau (Em gates ela disse: O que vocês desejam, pobres mortais?)!`);
    console.log('\n');
    console.log(`A platéia enlouquece, alguém grita, "ela deu esse mesmo tom de miado no filme 'Seriam os gatos deuses?'".`);
    console.log('\n');
    console.log(`Em seguida, ela corre pros braços de tio Jeremias, e diz: Miau! (Em gates, ela disse: Quero biscoitinho, você tem? Humano insignificante!)`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Tio Jeremias dá um biscoitinho para Samira - A gata, ela, toda contente, empanturra-se com a guloseima!`);
    console.log('\n');
    console.log(`E então, tio Jeremias pergunta: Você quer voltar para sua casa? Sua caminha está lá, esperando por você!`);
    console.log('\n');
    console.log(`Samira - A gata, pensa por um instante, em seguida, ela olha para ${jogador.nome} e ${magnanimus.nome}...`);
    console.log('\n');
    console.log(`...e finalmente responde: Miau!`);
    console.log('\n');

    do {

        opcao = +prompt('Samira - A gata, deve retornar? 1 - Sim | 2 - Não: ');

        switch (opcao) {

            case 1:
                console.log('\n');
                console.log('Você escolheu a opção 1 - Sim.');
                console.log('\n');
                pressionarEnter();
                iniciarEpilogoUm();
                break;

            case 2:
                console.log('\n');
                console.log('Você escolheu a opção 2 - Não.');
                console.log('\n');
                pressionarEnter();
                iniciarEpilogoDois();
                break;

            default:
                console.log('\n');
                console.log('Opção inválida!');
                console.log('\n');
                break;

        }

    } while (opcao < 1 || opcao > 2);

    console.log(`***** Fim ????? *****`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');

}

module.exports = iniciarCapQuatroParteFinal;