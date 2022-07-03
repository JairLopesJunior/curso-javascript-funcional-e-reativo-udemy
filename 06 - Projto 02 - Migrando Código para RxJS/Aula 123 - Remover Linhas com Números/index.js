const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, 'legendas');

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')'
];

const mesclarElementos = conteudos => conteudos.join(' ');
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
        fn.elementoTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
    )
    .subscribe(console.log);