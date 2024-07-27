const Personagem = require("../classes/Personagem.js");

class Oponente extends Personagem {
    constructor(vida) {
        super(vida);

    }

    atacar() {
        return Math.floor(Math.random() * this.vida);
    }

    defender(golpe) {
        this.vida -= golpe;
    }
}

module.exports = Oponente;