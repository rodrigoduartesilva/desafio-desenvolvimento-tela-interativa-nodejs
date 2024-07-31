// Essa função retorna uma promisse onde é executado um setTimeout que tem por objetivo, exibir as mensagens 
// dentro da função assincrona exibirIntroduçao.
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//Funçao assincrona, esta funçao executa a cada dois segundos (2000 ms) uma trecho do codigo em sequencia, contido no corpo dela.
// Isso cria um efeito dentro da introdução da aplicação que simula um texto introdutorio de um filme
// onde cada paragrafo é exibido um apos o outro
async function exibirIntroducao() {

    console.log('\n');
    console.log('****************************************************************************');
    console.log('\n');
    await delay(1000);

    console.log('Todos os anos em Meow City, acontecia um famoso torneio de luta.');
    console.log('\n');
    await delay(2000);

    console.log('Conhecido como "Lutadores", esse torneio reunia os melhores lutadores de cada bairro...');
    console.log('\n');
    await delay(2000);

    console.log('...e o(a) grande vencedor(a), ganhará uma camisa autografada por Samira - A Gata...');
    console.log('\n');
    await delay(2000);

    console.log('... Samira era o ser felino mais famoso da cidade, e todos cidadãos se degladiavam para ter qualquer item tocado por ela...');
    console.log('\n');
    await delay(2000);

    console.log('...e justamente pelo o prêmio principal ser um autografo dela, todos treinavam o ano inteiro, esperando por esse grande momento...');
    console.log('\n');
    await delay(1000);

    console.log('****************************************************************************');
    console.log('\n');

}

module.exports = exibirIntroducao;