// Criação do personagem (Heroi)
const nome = prompt('Diga o melhor nome que venha a sua cabeça: ');
const heroi = new Heroi(80, nome, 80, 50);
console.log(`Seu persongaem foi criado, agora sempre chamaremos ele de ${heroi.nome}`);
console.log();
heroi.status();
console.log();

// Tutorial de como o personagem se alimenta
console.log(`Aparentemente o ${heroi.nome} está caminhando há dias e parece um pouco cansado!`);
console.log();
if (prompt('Deseja comer uma fruta? S - sim ou N - não: ').toUpperCase() == 'S') {
    console.log(`"humm!! Que fruta deliciosa!" - Disse ${heroi.nome}`);
    console.log(`"Vou querer mais alguns!"`);
    heroi.alimentar(5, 2);
    heroi.status();
} else if (prompt('Então deseja comer carne de caça? S - sim ou N - não: ').toUpperCase() == 'S') {
    console.log(`"humm!! Essa carne estava ótima!" - Disse ${heroi.nome}`);
    heroi.alimentar(10, 5);
    heroi.status();
} else {
    console.log('SEU PERSONAGEM NÃO RESTAUROU FOME OU VIDA!');
}
console.log();

// Ensina a melhorar o condicionamento fisico (Força)
console.log(`Ao longe ${heroi.nome} avistou um grande lago e foi se aproximando!`);
console.log(`Dentro do lago existe alguma coisa brilhante!`);
console.log();
if (prompt('Deseja nadar até o ponto brilhante? S - sim ou N - não: ').toUpperCase() == 'S') {
    heroi.treinar(10);
    console.log(`Era mais interessante de longe, ao pegar o objeto brilhante, ${heroi.nome} percebeu que se tratava de um anel de latinha de refrigerante!`);
    console.log(`Logo após, ${heroi.nome} retornou a margem do lago, se secou e seguiu o caminho!`);
    heroi.status();
} else {
    console.log(`Ufaa!! Disse ${heroi.nome}, a agua estava estava bastante fria!`);
}
console.log();
console.log(`Algum tempo se passou e no meio do caminho, havia uma árvore bem alta.`);
console.log(`No topo dessa ávore, existia uma sabola amarrada.`);
console.log();
if (prompt('Deseja subir na árvore para pegar a sacola? S - sim ou N - não: ').toUpperCase() == 'S') {
    console.log(`Puxa! Mais que sorte! Dentro da sacola haviam 5 moedas escondidas!`);
    heroi.depositar(5);
    heroi.treinar(15);
    heroi.status();
} else {
    console.log(`Nossa! Que preguiça! Não vou subir essa árvore! Deixa para uma proxima!`);
    console.log(`SEM ATIVIDADES FISICAS, SEU PERSONAGEM PERDE PONTOS DE FORÇA!`);
}

// Fim da fase introdutória
console.log();
const f1 = fase1(heroi);

if (f1) {
    const f2 = fase2(heroi);
    if (f2) {
        faseFinal(heroi);
    } else {
        fase3(heroi);
        faseFinal(heroi);
    }
} else {
    console.log('Game Over');
}