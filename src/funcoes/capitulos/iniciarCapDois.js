const Oponente = require('../../classes/Oponente');
const calcularParImpar = require('../calcularParImpar');
const pressionarEnter = require('../pressionarEnter');

// Chamda da função que inicia o capitulo 2
function iniciarCapDois(jogador) {

    console.log('\n');
    console.log(`***** Inicio do Capitulo 2 *****`);
    console.log('\n');

    console.log(`Finalmente, o grande dia chegou!`);
    console.log('\n');
    console.log(`${jogador.nome} foi para a casa do Tio Jeremias, para então, juntos, irem ao torneio!`);
    console.log('\n');
    console.log(`Tio Jeremias diz que precisam passar no posto de gasolina para encher o tanque.`);
    console.log('\n');
    console.log(`Reabastecido, Tio Jeremias agora saca a carteira para fazer o pagamento, no entanto, ele nota que saiu de casa e não pegou a carteira!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`${jogador.nome}, esqueci a carteira, você pode emprestar dinheiro para que eu possa pagar o combustível, o valor é C$ 5. Diz o tio todo sem graça!`);
    console.log('\n');
    console.log(`${jogador.nome} afirma positivamente com a cabeça e saca sua carteira, ele(a) tinha apenas C$ ${jogador.moedas} que foi o dinheiro que seu tio pagou pelo trabalho dos dias anteriores.`);
    jogador.sacarMoedas(5);
    console.log('\n');
    console.log(`Alguns minutos mais tarde, os dois estavam em um campo de futebol, a arena de luta estava disposta no meio do campo, e as arquibancadas ferviam de gente!`);
    console.log('\n');
    console.log(`Muitos cartazes com fotos de Samira - a Gata eram balançados por seus fãs que estavam alí, na arquibancada!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Tio Jeremias olha as fotos com alegria e até faz uma feição de orgulho!`);
    console.log('\n');

    const oponenteCapDois = new Oponente('Liturgo Samavarola', 'Masculino', 100, 5);

    console.log(`Mais tarde, o sorteio é realizado e o primeiro oponente de ${jogador.nome} será: ${oponenteCapDois.nome}.`);
    console.log('\n');
    console.log(`A luta se iniciaria em alguns minutos, ${jogador.nome} entra na arena e todos começam a aplaudir, assim como aplaudem ${oponenteCapDois.nome}.`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`O juiz grita: Lutem!!!!`);
    console.log('\n');
    console.log(`${oponenteCapDois.nome} desdenha de ${jogador.nome} dizendo: Vocé nunca me vencerá! Haaaa!!`);
    console.log('\n');
    console.log(`Dica 1: Nessa luta, o personagem que ataca será decidido via par ou ímpar.`);
    console.log('\n');
    console.log(`Dica 2: Você escolherá uma das duas opções abaixo, se no sorteio der a opção escolhida por você, seu ataque será o primeiro, caso contrário, o oponente atacará primeiro.`);
    console.log('\n');
    console.log(`Dica 3: Perde o lutador que zerar primeiro o valor de sua vida.`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');

    calcularParImpar(jogador, oponenteCapDois);

    console.log(`Ahhhhhhhhh!! Grita ${oponenteCapDois.nome}.`);
    console.log('\n');
    console.log(`Você ganhou por pura sorte! Continua o oponente perdedor.`);
    console.log('\n');
    console.log(`O juíz da luta declara em voz alta o final da batalha e congratula ${jogador.nome}.`);
    console.log('\n');
    console.log(`${oponenteCapDois.nome} sai da arena ao som de vaias, em seguida, desaparece ao passar pela entrada do vestiário!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Esse não veremos tão cedo! Comemora tio Jeremias!!`);
    console.log('\n');
    console.log(`${jogador.nome} está sem acreditar na vitória (claro que iria ganhar a luta, afinal, ele(a) tem o poder do protagonismo!) e pula de alegria!`);
    console.log('\n');
    console.log(`Em uma sala acima das arquibancadas, uma figura felina observa tudo que está acontecendo lá embaixo...`);
    console.log('\n');
    console.log(`...apos um tempo olhando, a figura apenas fala: Miau!`);
    console.log('\n');
    console.log(`Desaparecendo no fundo da sala!`);
    console.log('\n');

    console.log(`***** Fim do Capitulo 2 *****`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
}



module.exports = iniciarCapDois;