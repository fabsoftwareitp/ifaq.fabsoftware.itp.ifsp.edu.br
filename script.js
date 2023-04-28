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
  
      // recebe o texto da pergunta
      let utterance = new SpeechSynthesisUtterance(e.pergunta);
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


      utterance.onstart = function () {
        texto.innerText = e.resposta;   
      }
      
      utterance.onend = function () {
        texto.innerText = e.pergunta;
      }
      
      botaoParar.onclick = function(){
        speechSynthesis.cancel();
        texto.innerText = e.pergunta; 
      };
    };
    
  });
}

lerJson();
