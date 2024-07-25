//Crie um objeto produto com as propriedades nome, preco e quantidade. Em seguida, calcule e imprima o valor total do estoque (preço * quantidade).

const produto = {
    nome: "Dida",
    preco: "3",
    quantidade: "12000"
}

console.log(`O valor total do estoque é de: R$${(Number(produto.preco) * Number(produto.quantidade))}`)