//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for..of.

let filmesSalvos = []

for (let i = 1; i <= 5; i++) {
    let filmes  = prompt(`Diqgite o ${i}° filme: `)
    filmesSalvos.push(filmes)
}

for (let adicionar of filmesSalvos) {
    console.log(adicionar);
}
