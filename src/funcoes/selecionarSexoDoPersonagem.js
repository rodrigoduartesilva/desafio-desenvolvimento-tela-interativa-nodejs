const prompt = require('prompt-sync')();

function selecionarSexoDoPersonagem() {

    let sexoSelecionado;
    let validaWhile = true;

    do {

        const sexo = +prompt('Escolha o sexo do seu personagem: 1 - Masculino | 2 - Feminino: ');

        switch (sexo) {
            case 1:
                sexoSelecionado = 'Masculino';
                console.log(`Seu personagem é do sexo ${sexoSelecionado}`);
                validaWhile = false;
                break;
            case 2:
                sexoSelecionado = 'Feminino';
                console.log(`Seu personagem é do sexo ${sexoSelecionado}`);
                validaWhile = false;
                break;
            default:
                console.log('\n');
                console.log('Opção inválida!');
                break;
        }

    } while (validaWhile);

    return sexoSelecionado;

}

module.exports = selecionarSexoDoPersonagem;