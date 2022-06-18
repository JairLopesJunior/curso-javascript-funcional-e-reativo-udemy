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

const media = carrinho
    .filter(item => item.fragil)
    .map(item => item.qtde * item.preco)
    .reduce((acc, el) => {
        const novaQtde = acc.qtde + 1;
        const novoTotal = acc.total + el;
        return {
            qtde: novaQtde,
            total: novoTotal,
            media: novoTotal / novaQtde
        }
    }, { qtde: 0, total: 0, media: 0 });

console.log(media);