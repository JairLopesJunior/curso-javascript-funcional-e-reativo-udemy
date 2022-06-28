
let qtdeDeExecucoes = 0; // Efeito colateral observável

// Pura
function somar(a, b) {
    qtdeDeExecucoes++; // Alterou algo que está fora da função
    return a + b;
}

console.log(qtdeDeExecucoes);
console.log(somar(1, 6));
console.log(qtdeDeExecucoes);