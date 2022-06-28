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

function agruparPalavras() {
    
}

fn.lerDiretorio(caminho)
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
    .then(console.log);