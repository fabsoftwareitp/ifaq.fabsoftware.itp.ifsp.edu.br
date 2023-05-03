const caixaPerguntas = document.querySelector(".swiper-wrapper");
const botaoParar = document.querySelector("#button-stop");

async function lerJson() {
  const arquivoJson = await fetch("data.json");
  let data = await arquivoJson.json();
  data = Array.from(data);

  data.forEach((e) => {
    let newDiv = document.createElement("div");
    let texto = document.createElement("span");

    texto.innerText = e.pergunta;

    newDiv.classList.add("swiper-slide");
    texto.classList.add("texto-slide");

    newDiv.appendChild(texto);

    caixaPerguntas.appendChild(newDiv);

    newDiv.onclick = function () {
      speechSynthesis.cancel();
      pergunta(newDiv, texto, e);
      // recebe o texto da pergunta
      let utterance = new SpeechSynthesisUtterance(e.pergunta);
      // define o pitch e o rate da voz
      utterance.pitch = 1.2;
      utterance.rate = 1.4;
      // fala a pergunta
      speechSynthesis.speak(utterance);
      // recebe o texto da resposta
      utterance = new SpeechSynthesisUtterance("Resposta: " + e.resposta);
      // define o pitch e o rate da voz
      utterance.pitch = 1.2;
      utterance.rate = 1.4;
      // fala a resposta
      
      swiper.on("activeIndexChange", () => {
        speechSynthesis.cancel();
        pergunta(newDiv, texto, e);
      });

      utterance.onstart = function () {
        resposta(newDiv, texto, e);

      };

      utterance.onend = function () {
        pergunta(newDiv, texto, e);
      };
      
      //proximo slide
      speechSynthesis.speak(utterance);
      utterance.addEventListener('end', () => {
        swiper.slideNext();
      });

      //botão de parar
      botaoParar.onclick = function () {
        speechSynthesis.cancel();
        pergunta(newDiv, texto, e);
      };
    };
  });
}

lerJson();

function pergunta(newDiv, texto, e) {
  newDiv.classList.remove("animate__animated", "animate__fadeInDown");
  newDiv.classList.add("animate__animated", "animate__fadeInUp");
  texto.innerText = e.pergunta;
}

function resposta(newDiv, texto, e) {
  newDiv.classList.remove("animate__animated", "animate__fadeInUp");
  newDiv.classList.add("animate__animated", "animate__fadeInDown");
  texto.innerText = e.resposta;
}