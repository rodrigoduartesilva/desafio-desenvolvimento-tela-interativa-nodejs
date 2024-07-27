function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exibirIntroducao() {
    console.log('****************************************************************************');
    console.log('\n');
    await delay(1000);

    console.log('Todos os anos em Meow City, acontecia um famoso torneio de luta.');
    console.log('\n');
    await delay(2000);

    console.log('Conhecido como Lutadores, esse torneio reuniao os melhores lutadores de cada bairro...');
    console.log('\n');
    await delay(2000);

    console.log('...e o(a) grande vencedor(a), ganhará uma camisa autografada de Samira - A Gata...');
    console.log('\n');
    await delay(2000);

    console.log('... Samira era o ser felino mais famoso da cidade, e todos cidadãos se degladiavam para ter qualquer item tocado por ela...');
    console.log('\n');
    await delay(2000);

    console.log('...e justamente pelo o prêmio principal ser um autografo dela, todos treinavam o ano inteiro, esperando por esse grande momento ...');
    console.log('\n');
    await delay(1000);

    console.log('****************************************************************************');
    console.log('\n');
}

module.exports = exibirIntroducao;