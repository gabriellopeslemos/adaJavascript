const listadeContatos = ['Paulo', 'Selina', 'Roger ', 'Rubens', 'Zeca', 'Josue', 'Natalia', 'Bianca']

let fimBusca = false
let indiceDoUsuario = 0
while (!fimBusca){
    const usuarioAtual = listadeContatos[indiceDoUsuario]
    if (usuarioAtual.startsWith('Z')) {
        fimBusca = true
        console.log('Usuario encontrado:',usuarioAtual)
    }
    indiceDoUsuario += 1

    if (indiceDoUsuario === listadeContatos.length){
        fimBusca = true
        console.log('Usuario nao encontrado')
    }
}