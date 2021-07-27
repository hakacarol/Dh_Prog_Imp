// definindo a função resolverDepoisDe2Segundos que fez uma promessa de resolve dps de 2 segundos
function resolverDepoisDe2Segundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
} // exibe 40 e 60 depois de 2 segundos cada um

async function adicionar1(x) {
    var a = resolverDepoisDe2Segundos(10);
    var b = resolverDepoisDe2Segundos(20);
    return x + await a + await b;
}

adicionar1(10).then(v => {
    console.log(v); // exibe 60 depois de 2 segundos
});

async function adicionar2(x) { // maneira diferente de escrever a order do await
    var a = await resolverDepoisDe2Segundos(20);
    var b = await resolverDepoisDe2Segundos(30);
    return x + a + b;
}

adicionar2(10).then(v => {
    console.log(v); // exibe 60 depois de 4 segundos
});

