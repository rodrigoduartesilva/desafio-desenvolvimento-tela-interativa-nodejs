class Personagem {
    constructor(vida) {
        this.vida = vida;
    }

    defender() {
        //Este método será sobrescrito pelas classes filhas afim de exemplificar o conceito de polimorfimos em OO.
    }

}

module.exports = Personagem;