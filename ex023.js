//Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.

function imprimeOPrimeiroNome() {
    let nomeCompleto = prompt("Digite seu nome: ")
    let nomes = nomeCompleto.split(" ")
    let primeiroNome = nomes[0]

    console.log(primeiroNome);
    
}

imprimeOPrimeiroNome()
