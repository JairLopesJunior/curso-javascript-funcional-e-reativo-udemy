const fs = require('fs');
const path = require('path');

function lerDiretorio(caminho) {
    return new Promise((resolve, reject) => {
        try {
            let arquivos = fs.readdirSync(caminho);
            arquivos = arquivos.map(arquivo => path.join(caminho, arquivo));
            resolve(arquivos);
        } catch(e) {
            reject(e);
        }
    });
}

function elementoTerminadosCom(array, padrao) {
    return array.filter(el => el.endsWith(padrao));
}

module.exports = {
    lerDiretorio,
    elementoTerminadosCom
};