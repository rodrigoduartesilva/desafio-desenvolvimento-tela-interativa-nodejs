const Personagem = require("../classes/Personagem.js");

//Essa classe é resposavel pela abstração do oponente, é a partir dela que será criada os inimigos dentro do jogo
class Oponente extends Personagem {

    //Construtor onde serão passado os atributos no ato da instanciação da classe dentro da aplicação
    constructor(nome, sexo, vida, forca) {
        //atributo herdado da classe mãe (Personagem)
        super(vida);

        this.nome = nome;
        this.sexo = sexo;
        this.vida = vida;
        this.forca = forca;
    }

    //Este método tem como objetivo imprimir no terminal o status do personagem
    statusPersonagem() {
        console.log('\n');
        console.log('****** Status do Oponente ******');
        console.log('\n');
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}%`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Força: ${this.forca} pontos`);
        console.log('\n');
    }

    //Este método tem a função de subtrair a vida do personagem quando ele é atacado dentro do jogo
    defender(golpe) {
        this.vida -= golpe;
    }
}

module.exports = Oponente;