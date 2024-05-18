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
  }, 10000); // Atraso de 3 segundos antes de começar a digitar a resposta

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
    }, 10000);
  });