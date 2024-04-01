//let titulo = document.querySelector('h1')
//titulo.innerHTML = 'jogo do Número secreto'

//let paragrafo = document.querySelector('p')
//paragrafo.innerHTML = 'Escolha um Número entre 1 e 10'
let listaDeNumeroSorteados =[]
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

// passo 0
function exibirtextoNaTela (tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML= texto
    responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.2});
}

//passo 1

function exibirMensagemInicial(){
    exibirtextoNaTela ('h1',' Jogo do Número secreto')
    exibirtextoNaTela ('p','Escolha um Número entre 1 e 10')
}
exibirMensagemInicial()

//passo 2
function verificarChute() {
    let chute = document.querySelector('input').value
    if (chute == numeroSecreto){
        exibirtextoNaTela('h1', 'Acertou')
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagemTentativas = `Você descobriu o número Secreto com ${tentativas} ${palavraTentativa}`
        exibirtextoNaTela('p',mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if ( chute > numeroSecreto){
            exibirtextoNaTela('p','O numero secreto é menor')
        }else {
            exibirtextoNaTela ('p', 'Numero sereto é maior')
        }tentativas++
        limparCampo()
    }
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random()*numeroLimite+1)
   let quantidadeDeElementosNalista = listaDeNumeroSorteados.length
        if(quantidadeDeElementosNalista == numeroLimite)
   listaDeNumeroSorteados = []
        if (listaDeNumeroSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
   }else {
    listaDeNumeroSorteados.push(numeroEscolhido) // push add item na lista
    console.log(listaDeNumeroSorteados)
    return numeroEscolhido
   }
}
function limparCampo(){
    chute = document.querySelector('input')
    chute.value = ''
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled,true')
}