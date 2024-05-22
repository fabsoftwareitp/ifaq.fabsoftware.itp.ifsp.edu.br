function typeWrite(elemento, delay = 0) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, delay + 75 * i);
  });
}

const pergunta = document.querySelector('.pergunta');
typeWrite(pergunta);

const resposta = document.querySelector('.resposta');
setTimeout(() => {
  typeWrite(resposta);
}, 9300);

function fadeInElement(element) {
  var opacity = 0;
  var intervalId = setInterval(function() {
    opacity += 0.1;
    element.style.opacity = opacity;

    if (opacity >= 1) {
      clearInterval(intervalId);
    }
  }, 100);
}

var revealfadeins = document.querySelectorAll('#revealfadein');

revealfadeins.forEach(function(revealfadein) {
  setTimeout(function() {
    fadeInElement(revealfadein);
  }, 9000);
});

const slides = document.querySelectorAll('.slide');
  let currentIndex = 0;

  function updateSlides() {
    slides.forEach((slide, index) => {
      if (index === currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  updateSlides();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }, 3000);