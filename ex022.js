//Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.

function imprimindo() {
    let nomeCompleto = prompt("Digite seu nome: ")
    let nomes = nomeCompleto.split(" ")
    let primeiroNome = nomes[0]
    let ultimoNome = nomes[nomes.length -1]
    

    console.log(`Seu primeiro nome é: ${primeiroNome}`)
    console.log(`Seu último nome é: ${ultimoNome}`)
}

imprimindo()
