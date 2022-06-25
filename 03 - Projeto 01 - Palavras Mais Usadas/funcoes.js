const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
    let arquivos = fs.readdirSync(caminho);
    return arquivos.map(arquivo => path.join(caminho, arquivo));
}

module.exports = {
    lerDiretorio
};