const Personagem = require("../classes/Personagem.js");

class Jogador extends Personagem {
    moedas = 0;
    forcaAtaqueEsp = 0;
    specialCoin = 0;
    wheyProtein = 0;

    constructor(nome, sexo, forca, vida, forcaAtaqueEsp, specialCoin, wheyProtein) {
        super(vida, forcaAtaqueEsp);
        this.nome = nome;
        this.sexo = sexo;
        this.vida = vida;
        this.forcaAtaqueEsp = forcaAtaqueEsp;
        this.forca = forca;
        this.specialCoin = specialCoin;
        this.wheyProtein = wheyProtein;
    }

    statusPersonagem() {
        console.log('\n');
        console.log('****** Status do Personagem ******');
        console.log();
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}%`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Força: ${this.forca} pontos`);
        console.log(`Moedas: C$ ${this.moedas}`);
        console.log(`Special Coin: ${this.specialCoin}`);
        console.log(`Whey Protein: ${this.wheyProtein}`);
        console.log();
    }

    alimentar(fome, vida) {
        this.fome += fome;
        this.vida += vida;
    }

    treinar(treino) {
        this.forca += treino;
    }

    somarPontos(pontos) {
        this.pontos += pontos;
    }

    somarMoedas(moedas) {
        this.moedas += moedas;
    }

    sacarMoedas(moedas) {
        this.moedas = moedas;
    }

    restaurarStatus() {
        this.vida = 100;
        this.forca = 100;
    }

    restaurarVida(vida) {
        this.vida += 100;
    }

    atacar() {
        return Math.floor(Math.random() * (this.vida + this.forca));
    }

    defender(golpe) {
        this.vida -= golpe;
        this.forca -= golpe;
    }
}

module.exports = Jogador;