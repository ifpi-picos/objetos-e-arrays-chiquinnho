//Utilize a lista de filmes do exercício anterior e exiba no console cada um dos filmes informados usando um for tradicional.

let filmesSalvos = []

for (let i = 1; i <= 5; i++) {
    let filmes  = prompt(`Diqgite o ${i}° filme: `)
    filmesSalvos.push(filmes)
}
for (let i = 0; i < filmesSalvos.length; i++) {
    console.log(filmesSalvos[i])
}
