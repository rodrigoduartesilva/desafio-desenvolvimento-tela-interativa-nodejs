const prompt = require('prompt-sync')();

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

