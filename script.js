const caixaPerguntas = document.querySelector(".swiper-wrapper");
const botaoParar = document.querySelector("#button-stop");

async function lerJson() {
  const arquivoJson = await fetch("data.json");
  let data = await arquivoJson.json();
  data = Array.from(data);

  data.forEach((e) => {
    let newDiv = document.createElement("div");
    let textoPergunta = document.createElement("span");
    let textoResposta = document.createElement("span");
     
    textoPergunta.innerText = e.pergunta;
    textoResposta.innerText = e.resposta;

    newDiv.classList.add("swiper-slide");
    textoPergunta.classList.add("texto-pergunta");
    textoResposta.classList.add("texto-resposta"); 

    newDiv.appendChild(textoPergunta);  
    newDiv.appendChild(textoResposta);  
    caixaPerguntas.appendChild(newDiv);
    
    newDiv.onclick = function () {
      speechSynthesis.cancel();
      // recebe o texto da pergunta
      let utterance = new SpeechSynthesisUtterance(e.pergunta);
      // define o pitch e o rate da voz
      utterance.pitch = 1.2;
      utterance.rate = 1.7;
      // fala a pergunta
      speechSynthesis.speak(utterance);
      // recebe o texto da resposta
      utterance = new SpeechSynthesisUtterance("Resposta: " + e.resposta);
      // define o pitch e o rate da voz
      utterance.pitch = 1.2;
      utterance.rate = 1.7;
      // fala a resposta
      speechSynthesis.speak(utterance);


      utterance.onstart = function () {
        textoPergunta.classList.add("texto-desativo");
        textoResposta.classList.add("texto-ativo");   
      }
      
      utterance.onend = function () {
        textoPergunta.classList.remove("texto-desativo");
        textoResposta.classList.remove("texto-ativo");
      }
      
      botaoParar.onclick = function(){
        speechSynthesis.cancel();
        textoPergunta.classList.remove("texto-desativo");
        textoResposta.classList.remove("texto-ativo");  
      };
    };
    
  });
}

lerJson();
