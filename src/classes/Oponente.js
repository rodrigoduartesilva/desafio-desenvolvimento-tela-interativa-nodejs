const Personagem = require("../classes/Personagem.js");

class Oponente extends Personagem {
    constructor(nome, sexo, vida, forcaAtaqueEsp, forca) {
        super(vida, forcaAtaqueEsp);

        this.nome = nome;
        this.sexo = sexo;
        this.vida = vida;
        this.forcaAtaqueEsp = forcaAtaqueEsp;
        this.forca = forca;
    }

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

    atacar() {
        return Math.floor(Math.random() * this.vida);
    }

    defender(golpe) {
        this.vida -= golpe;
    }
}

module.exports = Oponente;