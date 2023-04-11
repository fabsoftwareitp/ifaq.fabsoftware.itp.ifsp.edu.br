const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

var perguntas = ['Há quantos anos existe o IFSP Itapetininga?', 'Pergunta 2', 'Pergunta 3'];
var respostas = ['O IFSP Itapetininga funciona há 10 anos', 'Resposta 2', 'Resposta 3'];

for (var i = 0; i < perguntas.length; i++) {
    let newDiv = document.createElement("div");
    newDiv.innerText = perguntas[i];
    newDiv.classList.add('pgt');
    
    newDiv.onclick = function () {
        // por meio do indice da pergunta encontra-se a resposta correspondente
        var indice = perguntas.indexOf(newDiv.textContent);
        // recebe o texto da pergunta
        let utterance = new SpeechSynthesisUtterance(newDiv.textContent);
        // define o pitch e o rate da voz
        utterance.pitch = pitch.value;
        utterance.rate = rate.value;
        // fala a pergunta
        speechSynthesis.speak(utterance);
        // recebe o texto da resposta
        utterance = new SpeechSynthesisUtterance("Resposta: " + respostas[indice]);
        // define o pitch e o rate da voz
        utterance.pitch = pitch.value;
        utterance.rate = rate.value;
        // fala a resposta
        speechSynthesis.speak(utterance);
    }
    
    document.body.appendChild(newDiv);
}

pitch.onchange = function () {
    pitchValue.textContent = pitch.value;
};
  
rate.onchange = function () {
    rateValue.textContent = rate.value;
};