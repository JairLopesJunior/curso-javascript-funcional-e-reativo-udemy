const path = require('path');
const fn = require('./funcoes');

const caminho = path.join(__dirname, 'legendas');

fn.lerDiretorio(caminho)
    .then(arquivos => fn.elementoTerminadosCom(arquivos, '.srt'))
    .then(console.log);