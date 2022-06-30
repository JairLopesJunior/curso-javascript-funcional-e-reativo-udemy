const letrasAninhadas = [
    ['O', ['l'], 'á'], 
    [' '], 
    ['m', ['u', ['n', ['d']]], 'o'],
    ['!', '!', '!', '!']
];

//const letras = letrasAninhadas.flat(Infinity);

//console.log(letras);

const resultado = letrasAninhadas
    .flatMap(l => l)
    .reduce((a, b) => a + b);

console.log(resultado);