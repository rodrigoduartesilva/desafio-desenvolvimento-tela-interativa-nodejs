const Personagem = require("../classes/Personagem.js");

//Essa classe é resposavel pela abstração do jogador, é a partir dela que podemos criar nosso personagem
class Jogador extends Personagem {
    moedas = 0;
    specialCoin = 0;
    wheyProtein = 0;

    //Construtor onde serão passado os atributos no ato da instanciação da classe dentro da aplicação
    constructor(nome, sexo, forca, vida, specialCoin, wheyProtein) {
        //atributo herdado da classe mãe (Personagem)
        super(vida);

        this.nome = nome;
        this.sexo = sexo;
        this.vida = vida;
        this.forca = forca;
        this.specialCoin = specialCoin;
        this.wheyProtein = wheyProtein;
    }

    //Este método tem como objetivo imprimir no terminal o status do personagem
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

    //Este método tem a função de somar as moedas do personagem dentro do jogo
    somarMoedas(moedas) {
        this.moedas += moedas;
    }

    //Este método tem a função de sacar as moedas do personagem dentro do jogo
    sacarMoedas(moedas) {
        this.moedas -= moedas;
    }

    //Este método tem a função de restaurar a vida do personagem dentro do jogo
    restaurarVida(valor) {

        if (valor == 1) {

            this.vida = 100;

        } else {

            this.vida += 10;

        }

    }

    //Este método tem a função de subtrair a vida do personagem quando ele é atacado dentro do jogo
    defender(golpe) {
        this.vida -= golpe;
    }

}

module.exports = Jogador;