document.addEventListener('DOMContentLoaded', () => {
  const ano = document.querySelector('#ano-atual');
  if (ano) ano.textContent = new Date().getFullYear();

  const carrossel = document.querySelector('[data-carrossel-manual]');
  if (!carrossel) return;

  const trilho = carrossel.querySelector('.carrossel__trilho--manual');
  const slides = carrossel.querySelectorAll('.carrossel__slide');
  const esquerda = carrossel.querySelector('.carrossel__seta--esquerda');
  const direita = carrossel.querySelector('.carrossel__seta--direita');
  let indice = 0;

  function irPara(i) {
    indice = (i + slides.length) % slides.length;
    trilho.style.transform = `translateX(${-indice * 100}%)`;
  }

  direita.addEventListener('click', () => irPara(indice + 1));
  esquerda.addEventListener('click', () => irPara(indice - 1));
});