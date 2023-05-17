/* 
    quando clicar na seta para avançar temos que sconder todas as imagens e mostrar a proxima imagem

        a imagem atual começa em 0 á a primeira imagem
        assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens para poder saber que agora vou mostrar a segunda imagem

        esconder todas as imagens
            pegar todas as imagens usando o DOM e remover a classe mostrar

        mostrar a próxima imagem
            pegar todas a imagens, descobrir qual é a próxima, e colocar a classe mostrar nela
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
  imagensPainel.forEach(imagem => {
      imagem.classList.remove('mostrar')
  })
}

function mostrarImagem(){    
  imagensPainel[imagemAtual].classList.add('mostrar')
}

setaAvancar.addEventListener('click', function () {
  if(imagemAtual !== imagensPainel.length - 1) {
      imagemAtual++        
  }

  esconderImagens()
  mostrarImagem()
})

setaVoltar.addEventListener('click', function () {
  if (imagemAtual !== 0) {
      imagemAtual--
  }

  esconderImagens()
  mostrarImagem()
})