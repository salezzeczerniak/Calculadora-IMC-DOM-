// Algoritmo 
// OK 1 - passo = Pegar os valores dos inputs;
// OK 2 - passo = Fazer o cálculo do IMC -> valorImc; 
// OK 3 - passo = Gerar a classificação IMC -> classificaçãoImc;
// 4 - passo = Organizar os dados do usuario para salvar na lista e gerar a data de cadastro;
// 5 - passo = Inserir o usuario na lista (salvar no localStorage);
// 6 - passo = Função para carregar os usuarios (localStorage), chamar ao carregar a página; 
// 7 - passo = (Renderizar - Mostrar na tela) Renderizar o conteúdo desta tabela com os usuarios cadastrados;
// 8 - passo = Botão para limpar os registros (localStorage)

function calcular(event){
    event.preventDefault()
    console.log("Foi executada a função calcular")

    let usuarios = receberValores()
    let imcCalculado = calcularImc(usuarios.altura, usuarios.peso)
    let classificacaoImc = classificarImc(imcCalculado)
    console.log(classificacaoImc)
    organizarDados(usuarios, imcCalculado, classificacaoImc)
}


function receberValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let alturaRecebido = document.getElementById("altura").value
    let pesoRecebido = document.getElementById("peso").value

    let dadosUsuario = {
        nome: nomeRecebido,
        altura: alturaRecebido,
        peso: pesoRecebido
    }

    console.log(dadosUsuario)

    return dadosUsuario
}


function calcularImc(altura, peso) {
    let imc = peso/(altura * altura)
    console.log(imc)
    return imc
}

function classificarImc(imc) {
    if (imc < 18.5){
        return "Abaixo do peso"
    }else if (imc >= 18.5 && imc < 25){
        return "Peso normal"
    }else if (imc >= 25 && imc < 30) {
        return "Sobrepeso"
    }else {
        return "Obesidade"
    }
}

function organizarDados(dadosUsuario, valorImc, classificacaoImc) {
    let dataHoraAtual = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now())

    console.log(dataHoraAtual);
}