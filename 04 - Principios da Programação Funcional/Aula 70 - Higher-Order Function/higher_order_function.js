

function executar(fn, ...params) {
    return function(textoInicial) {
        return `${textoInicial} ${fn(...params)}`;
    }
}

function somar(a, b, c) {
    return a + b + c;
}

function multi(a, b) {
    return a * b;
}

const r1 = executar(somar, 4, 5, 6)('O resultado da soma é');
const r2 = executar(multi, 30, 40)('\nO resultado da multiplicação é');

console.log(r1, r2);