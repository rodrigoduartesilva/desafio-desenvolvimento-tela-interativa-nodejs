const prompt = require('prompt-sync')();

function selecionarSexoDoPersonagem() {

    let sexoSelecionado;
    const sexo = +prompt('Escolha o sexo do seu personagem: 1 - Masculino | 2 - Feminino: ');

    switch (sexo) {
        case 1:
            sexoSelecionado = 'Masculino';
            console.log(`Seu personagem é do sexo ${sexoSelecionado}`);
            break;
        case 2:
            sexoSelecionado = 'Feminino';
            console.log(`Seu personagem é do sexo ${sexoSelecionado}`);
            break;
        default:
            console.log('\n');
            console.log('Opção inválida!');
            break;
    }

    return sexoSelecionado;

}

module.exports = selecionarSexoDoPersonagem;