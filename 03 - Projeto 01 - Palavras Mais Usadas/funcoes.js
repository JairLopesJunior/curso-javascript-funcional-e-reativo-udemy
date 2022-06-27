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

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        try {
            const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' });
            resolve(conteudo.toString());
        } catch(e) {
            reject(e);
        }
    })
}

function lerArquivos(caminhos) {
    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)));
}

function elementoTerminadosCom(array, padrao) {
    return array.filter(el => el.endsWith(padrao));
}

module.exports = {
    lerDiretorio,
    lerArquivo,
    lerArquivos,
    elementoTerminadosCom
};