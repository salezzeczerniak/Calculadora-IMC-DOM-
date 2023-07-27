// Algoritmo 
// OK 1 - passo = Pegar os valores dos inputs;
// OK 2 - passo = Fazer o cálculo do IMC -> valorImc; 
// OK 3 - passo = Gerar a classificação IMC -> classificaçãoImc;
// OK 4 - passo = Organizar os dados do usuario para salvar na lista e gerar a data de cadastro;
// OK 5 - passo = Inserir o usuario na lista (salvar no localStorage);
// 6 - passo = Função para carregar os usuarios (localStorage), chamar ao carregar a página; 
// 7 - passo = (Renderizar - Mostrar na tela) Renderizar o conteúdo desta tabela com os usuarios cadastrados;
// 8 - passo = Botão para limpar os registros (localStorage)

function calcular(event){
    //Função principal 
    event.preventDefault() // Previne o regarregar da página

    console.log("Foi executada a função calcular")
    // Passo 1
    let usuarios = receberValores()
    // Passo 2
    let imcCalculado = calcularImc(usuarios.altura, usuarios.peso)
    // Passo 3
    let classificacaoImc = classificarImc(imcCalculado)

    console.log(classificacaoImc)
    // Passo 4
    usuarios = organizarDados(usuarios, imcCalculado, classificacaoImc)

    // Passo 5
    cadastrarUsuario(usuarios)

    // Passo 6

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
    //Pegar a dataHoraAtual 
    let dataHoraAtual = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now())

    console.log(dataHoraAtual);

    // Organizando o objeto para salvar
    let dadosUsuarioAtualizado = {
        ...dadosUsuario, //Operador spread 
        imc: valorImc, 
        situacaoImc: classificacaoImc, 
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioAtualizado;
}

function cadastrarUsuario(dadosUsuario) {
    //Nessita dos dados do usuarios
    let listaUsuarios = []

    //Se houver uma lista de usuarios no localStorage, carregar isso para a variavel lista usuarios
    if(localStorage.getItem("usuariosCadastrados") != null){
        listaUsuarios = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    // Adiciona o usuario na lista de usuarios
    listaUsuarios.push(dadosUsuario)

    // Salva a listaUsuarios no localStorage
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuarios))
    
   
}

function carregarUsuarios() {
    let listaCarregada = []
    if(localStorage.getItem("usuariosCadastrados") != null) {
        listaCarregada = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }

    if(listaCarregada.length == 0) {
        // Se nao tiver nenhum usuario cadastrado, mostrar mensagem:
        let tabela = document.getElementById("corpo-tabela")

        //innerHTML = HTML interno
        tabela.innerHTML = "Nennhum usuario cadastrado"
    }
    console.log(listaCarregada)
}

window.addEventListener("DOMContentLoaded", () => carregarUsuarios())