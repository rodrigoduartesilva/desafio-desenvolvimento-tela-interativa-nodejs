const pressionarEnter = require("../pressionarEnter");

function iniciarPrologo(jogador) {

    console.log('\n');
    console.log(`${jogador.nome} morava em um bairro do suburbio de Meow City.`);
    console.log('\n');
    console.log(`Era a primeira vez que participava do torneio, por conta disso, a ansiedade tomava conta de sua mente!`);
    console.log('\n');
    console.log(`O torneio teria inicio em dois dias. ${jogador.nome} treinava sempre na parte da tarde, pois pela manhã, ajudava seu tio Jeremias em sua vendinha.`);
    console.log('\n');
    console.log(`Tio Jeremias era o responsável direto por ${jogador.nome} querer participar do torneio, pois seu tio era o fã número 1 de Samira - A Gata!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');
    console.log(`Tio Jeremias tinha todos os filmes estrelados por Samira, assim como possuia um album de fotos e até uma caminha de gato onde ele afirmava categoricamente que aquela caminha foi a primeira caminha de Samira.`);
    console.log('\n');
    console.log(`${jogador.nome} duvidava sempre que aquela caminha pertenceu a Samira, mas nunca falaria isso pra seu tio, que por vezes, ao falar da famosa gata, demostrava uma certa tristeza que ele não conseguia entender o porque!`);
    console.log('\n');
    console.log(`No final da manhã, ${jogador.nome} se preparava para iniciar seu treino, quando tio Jeremias deu-lhe C$ 10 pela manhã de trabalho!`);
    console.log('\n');
    jogador.somarMoedas(10);
    pressionarEnter();
    jogador.statusPersonagem();
    console.log(`${jogador.nome} sorriu e agradeceu seu tio, e logo em seguida, saiu para seu treino, afinal, o dia estava apenas começando!`);
    console.log('\n');
    pressionarEnter();
    console.log('\n');

}

module.exports = iniciarPrologo;