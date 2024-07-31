const Oponente = require("../../classes/Oponente");
const calcularParImpar = require("../calcularParImpar");
const pressionarEnter = require("../pressionarEnter");

function iniciarCapTres(jogador) {

    console.log('\n');
    console.log(`***** Inicio do Capitulo 3 *****`);
    console.log('\n');

    console.log(`Esse torneio era cruel, não havia intervalos entre as lutas e ${jogador.nome} sentia o cansaço do combate que acabou 10 minutos atras!`);
    console.log('\n');
    console.log(`O juíz todo trabalhado na empolgação, anuncia o sorteio do próximo oponente a enfrentar ${jogador.nome}.`);
    console.log('\n');
    console.log(`O papel com o nome é aberto e o juiz olha com um ar de espanto...`);
    console.log('\n');
    console.log(`... e gaguejando ele grita...`);
    const oponenteCaptres = new Oponente('Capitulina Andranofildes', 'Feminino', 100, 10);
    console.log('\n');
    console.log(`O próximo oponente a enfrentar ${jogador.nome} será ${oponenteCaptres.nome}!!!!!`);
    console.log('\n');
    console.log(`***** Fim do Capitulo 3 *****`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Calma gente! Capitulo acabou não, eu apenas esqueci de retirar o "console.log" dessa parte! Povo ansioso, eu hein!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`${oponenteCaptres.nome} era conhecida por ser a maior trambiqueira de Meow City, sua fama era conhecida por todos que alí estavam, e era fato, algo ruim iria sair dalí!`);
    console.log('\n');
    console.log(`${(oponenteCaptres.nome).slice(0, 10)} sempre usava de mentiras e calunias para se sair bem. Antes de ir trapacear nas arenas, ela era pedicure, mas um dia ela chegou no trabalho e a policia havia interditado o local por suspeita de tráfico de DORGAS.`);
    console.log('\n');
    console.log(`Dorgas era um alucinógeno criado a partir da podobromidrose (na minha terra o povo chama isso de chulé!), o criador desse alucinógeno era ninguem menos que Dunaldo Andranofildes, o filho mais novo de ${(oponenteCaptres.nome).slice(0, 10)}.`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Du, como gostava de ser chamado, hora atacava de relações internacionais, hora atacava de programador e hora atacava de palhaço de festa infantil! Ele conseguia fazer todas essas atividades de forma, digamos... ...ruim!!!`);
    console.log('\n');
    console.log(`Quando ele criou a Dorgas, ele sentiu que poderia continuar sendo ruim em todas as áreas da vida dele, porém, com a ajuda da mãe que era a mestra da mentira, ele conseguiria um trocado (pelo menos).`);
    console.log('\n');
    console.log(`Além do filho desajustado, ${oponenteCaptres.nome} tinha uma filha mais velha chamada Motildes Dunalda Andranofildes, esta, pediu demissão do Banco Miado do Sul, para ter tempo para lutar pela causa das agomelatinas voadoras marcianas portuguesas!`);
    console.log('\n');
    console.log(`Toda essa intro para explanar o quanto ${jogador.nome} estava em maus lençóis nessa batalha!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`O juíz então grita: Lutem!!!`);
    console.log('\n');
    console.log(`${oponenteCaptres.nome} dá uma risada confiante e fala: Então você veio para duelar comigo? Esparava mais desse torneio!!`);
    console.log('\n');
    console.log(`${jogador.nome} então fala: Não importa o quanto trapaceie, eu te vencerei!`);
    console.log('\n');
    console.log(`Tio Jeremias assiste a tudo isso do lado da arena, com as mãos tremendo, ele apenas reza para que tudo isso acabe logo!!`);
    console.log('\n');
    console.log(`E então a luta começa!!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');

    calcularParImpar(jogador, oponenteCaptres);

    console.log(`Mais uma luta vencida por ${jogador.nome}!`);
    console.log('\n');
    console.log(`${oponenteCaptres.nome} não teve a minima chance!`);
    console.log('\n');
    console.log(`Porém, ${jogador.nome} estava entregue a exaustão! Não havia certeza de que conseguiria lutar o ultimo combate!`);
    console.log('\n');
    console.log(`A arquibancada vai a loucura com a vitória de ${jogador.nome}, enquanto ${oponenteCaptres.nome} é carregada para ambulancia, desacordada!`);
    console.log('\n');
    console.log(`Em meio a toda aquela festa, ${jogador.nome} escuta uma risada bastante familiar, olhando para o lado, a surpresa...`);

    console.log('\n');
    console.log(`***** Agora sim, fim do Capitulo 3 *****`);
    console.log('\n');

    pressionarEnter();
}

module.exports = iniciarCapTres;