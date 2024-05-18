Script animation digitado (
    function typeWrite(elemento) {
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = ' ';
      textoArray.forEach(function (letra, i) {

        setTimeout(function () {
          elemento.innerHTML += letra;
        }, 75 * i)

      });
    }
    const pergunta = document.querySelector('.pergunta');
    typeWrite(pergunta);
)
    
Script animation reveal (
    function fadeInElement(element) {
        var opacity = 0; // Opacidade inicial
        var intervalId = setInterval(function() {
            // Aumenta a opacidade gradualmente
            opacity += 0.1;
            element.style.opacity = opacity;

            // Verifica se a opacidade atingiu 1 (totalmente visível)
            if (opacity >= 1) {
                clearInterval(intervalId); // Para o intervalo de animação
            }
        }, 100); // Intervalo de 100 milissegundos
    }

    // Seleciona o elemento
    var heading = document.getElementById('myHeading');

    // Chama a função para aplicar a animação de fadeIn após um pequeno atraso
    setTimeout(function() {
        fadeInElement(heading);
    }, 1000); // Atraso de 1000 milissegundos (1 segundo)
)

Script animation slider (
const slider = document.querySelector('.slider');
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');

    // Função para atualizar a opacidade dos slides
    function updateSlideOpacity() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.opacity = 1; // Torna o slide visível
            } else {
                slide.style.opacity = 0; // Torna os outros slides invisíveis
            }
        });
    }

    // Atualiza a opacidade inicial dos slides
    updateSlideOpacity();

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
        updateSlideOpacity(); // Atualiza a opacidade durante a transição
    }, 3000); // Mudança a cada 3 segundos (3000 milissegundos)
)