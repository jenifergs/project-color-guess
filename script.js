const bolas = document.getElementsByClassName('ball');
const textoCor = document.getElementById('rgb-color');
const escolhaUmaCor = document.getElementById('answer');
const botaoReset = document.getElementById('reset-game');
const placar = document.getElementById('score');

function gerar_cor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

  return '(' + r + ',' + g + ',' + b + ')';
}
gerar_cor();

function aplicaCor() {
  for (let bola of bolas) {
    bola.style.backgroundColor = 'RGB' + gerar_cor();
  }
}
aplicaCor();

function textoCorRandon() {
  let indiceAleatorio = Math.floor(Math.random() * bolas.length);
  let bolaAleatoria = bolas[indiceAleatorio];
  let stringBackgroundColor = bolaAleatoria.style.backgroundColor;
  textoCor.innerText = stringBackgroundColor.substring(3);
}
textoCorRandon();

function escolheCorNoClick() {
  for (let bola of bolas) {
    bola.addEventListener('click', function () {
      if (bola.style.backgroundColor.substring(3) === textoCor.innerText) {
        escolhaUmaCor.innerText = 'Acertou!' + '🥳🥳🥳🥳';
        placar.innerText = parseInt(placar.innerText) + 3;
      } else {
        escolhaUmaCor.innerText = 'Errou! Tente novamente!'+ '😔😔😔😔';
      }
    });
  }
}
escolheCorNoClick();

botaoReset.addEventListener('click', function () {
  aplicaCor();
  textoCorRandon();
  escolhaUmaCor.innerText = 'Escolha uma cor!!';
});
