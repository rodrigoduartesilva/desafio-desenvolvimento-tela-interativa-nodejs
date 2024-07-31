const prompt = require('prompt-sync')();

// Funcao chamada para criar um efeito de pausa no texto dentro da aplicação
// o texto só continuará a ser exibido apos o usuario clicar em ENTER, 
// Uma extrutura de repetição valida se de fato a tecla pedida é pressionada, caso contrario, loop continuará 
// a ser executado
function pressionarEnter() {
    let continuePrompt = true;

    while (continuePrompt) {
        let input = prompt('Pressione ENTER para continuar!');

        if (input === null || input === "") {
            continuePrompt = false;
        }
    }
}

module.exports = pressionarEnter;

