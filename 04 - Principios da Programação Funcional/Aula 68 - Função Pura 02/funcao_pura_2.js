
// Função Impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1;
    return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(5, 6));