const carrinho = [
    { nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true },
    { nome: 'Impressora', qtde: 1, preco: 649.50, fragil: true },
    { nome: 'Caderno', qtde: 4, preco: 27.10, fragil: false },
    { nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false },
    { nome: 'Tesouro', qtde: 1, preco: 19.20, fragil: true }
];

// filter, map, reduce

// 1. fragil: true
// 2. qtde * preco -> total
// 3. media totais

const isFragil = item => item.fragil;
const total = item => item.qtde * item.preco;
const media = (a, b) => a + b;

const resul = carrinho
    .filter(isFragil)
    .map(total)
    .reduce(media);

console.log(resul);