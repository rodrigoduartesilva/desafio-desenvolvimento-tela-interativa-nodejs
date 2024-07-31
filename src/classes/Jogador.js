const Personagem = require("../classes/Personagem.js");

class Jogador extends Personagem {
    moedas = 0;
    specialCoin = 0;
    wheyProtein = 0;

    constructor(nome, sexo, forca, vida, specialCoin, wheyProtein) {
        super(vida);
        this.nome = nome;
        this.sexo = sexo;
        this.vida = vida;
        this.forca = forca;
        this.specialCoin = specialCoin;
        this.wheyProtein = wheyProtein;
    }

    statusPersonagem() {
        console.log('\n');
        console.log('****** Status do Personagem ******');
        console.log('\n');
        console.log(`Nome: ${this.nome}`);
        console.log(`Vida: ${this.vida}%`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Força: ${this.forca} pontos`);
        console.log(`Moedas: C$ ${this.moedas}`);
        console.log(`Special Coin: ${this.specialCoin}`);
        console.log(`Whey Protein: ${this.wheyProtein}`);
        console.log('\n');
    }

    somarMoedas(moedas) {
        this.moedas += moedas;
    }

    sacarMoedas(moedas) {
        this.moedas -= moedas;
    }

    restaurarVida(valor) {

        if (valor == 1) {

            this.vida = 100;

        } else {

            this.vida += 10;

        }

    }

    defender(golpe) {
        this.vida -= golpe;
    }

}

module.exports = Jogador;