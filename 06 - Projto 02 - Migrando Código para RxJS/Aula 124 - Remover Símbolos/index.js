const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, 'legendas');

const simbolos = [
    '.', '?', '-', ',', '"', '♪',
    '_', '<i>', '</i>', '\r', '[', ']',
    '(', ')', '!'
];

fn.lerDiretorio(caminho)
    .pipe(
        fn.elementoTerminadosCom('.srt'),
        fn.lerArquivo(),
        fn.separarTextoPor('\n'),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
        fn.removerSimbolos(simbolos),
        fn.separarTextoPor(' '),
        fn.removerElementosSeVazio(),
        fn.removerElementosSeApenasNumero(),
    )
    .subscribe(console.log);