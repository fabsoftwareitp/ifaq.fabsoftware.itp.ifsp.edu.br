const caixaPerguntas = document.querySelector(".swiper-wrapper");
const botaoParar = document.querySelector("#button-stop");
async function lerJson() {
  const arquivoJson = await fetch("data.json");
  let data = await arquivoJson.json();
  data = Array.from(data);

  data.forEach((e, key) => {
    let newDiv = document.createElement("div");
    newDiv.innerText = e.pergunta;

    newDiv.classList.add("swiper-slide");
    newDiv.classList.add("pgt");

    newDiv.onclick = function () {
      // recebe o texto da pergunta
      let utterance = new SpeechSynthesisUtterance(newDiv.textContent);
      // define o pitch e o rate da voz
      utterance.pitch = 1.2;
      utterance.rate = 1.5;
      // fala a pergunta
      speechSynthesis.speak(utterance);
      // recebe o texto da resposta
      utterance = new SpeechSynthesisUtterance("Resposta: " + e.resposta);
      // define o pitch e o rate da voz
      utterance.pitch = 1.2;
      utterance.rate = 1.5;
      // fala a resposta
      speechSynthesis.speak(utterance);
      botaoParar.onclick = function(){
        speechSynthesis.cancel()
      };
    };




    caixaPerguntas.appendChild(newDiv);
  });
}

lerJson();
