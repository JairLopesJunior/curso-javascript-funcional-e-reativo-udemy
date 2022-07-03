const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, 'legendas');

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
];

const mesclarElementos = conteudos => conteudos.join(' ');
const separarPorLinhas = todoConteudo => todoConteudo.split('\n');
const separarPorPalavras = todoConteudo => todoConteudo.split(' ');

function agruparElementos(palavras) {
    return Object.values(palavras.reduce((acc, palavra) => {
        const el = palavra.toLowerCase();
        const qtde = acc[el] ? acc[el].qtde + 1 : 1;
        acc[el] = { elemento: el, qtde };
        return acc;
    }, {}))
}

fn.lerDiretorio(caminho)
    .pipe(
        
    )
    .subscribe(console.log);

/*fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementoTerminadosCom(arquivos, '.srt'))
    .then(fn.lerArquivos)
    .then(mesclarElementos)
    .then(separarPorLinhas)
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeIncluir('-->'))
    .then(fn.removerElementosSeApenasNumero)
    .then(fn.removerSimbolos(simbolos))
    .then(mesclarElementos)
    .then(separarPorPalavras)
    .then(fn.removerElementosSeVazio)
    .then(fn.removerElementosSeApenasNumero)
    .then(agruparElementos)
    .then(fn.ordernarPorAtribNumerico('qtde', 'desc'))
    .then(console.log);*/