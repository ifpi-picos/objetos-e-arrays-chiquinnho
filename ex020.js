//Crie um array de objetos representando pessoas com nome e idade, e use find para encontrar a primeira pessoa com idade maior que 18.

let pessoas = [
    {nome: "Henrique", idade: 18 },
    {nome: "Karine", idade: 21 },
    {nome: "Isabela", idade: 114 },
    {nome: "Monyse", idade: 15 }
]
let primeiroComMaisDe18 = pessoas.find(pessoa => pessoa.idade > 18)

console.log(primeiroComMaisDe18)
