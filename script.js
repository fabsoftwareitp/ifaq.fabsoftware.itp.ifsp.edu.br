const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

var perguntas = [
  "O que é o Instituto Federal de São Paulo, campus Itapetininga?",
  "Em que área de conhecimento o campus Itapetininga do Instituto Federal de São Paulo atua?",
  "Quais são os cursos oferecidos pelo Instituto Federal de São Paulo, campus Itapetininga?",
  "Como é o campus Itapetininga do Instituto Federal de São Paulo em termos de infraestrutura?",
  "Quais são as atividades extracurriculares disponíveis para os alunos do campus Itapetininga do Instituto Federal de São Paulo?",
  "Como é a vida estudantil no campus Itapetininga do Instituto Federal de São Paulo?",
];
var respostas = [
  " Instituto Federal de São Paulo, campus Itapetininga, é uma instituição pública federal de ensino superior, técnico e profissionalizante. Ele oferece cursos técnicos, de graduação e de pós-graduação nas áreas de tecnologia, ciências humanas e exatas.",
  "O campus Itapetininga do Instituto Federal de São Paulo foi fundado em 2008, a partir de uma unidade já existente da Escola Técnica Federal de São Paulo. Desde então, o campus tem se destacado pela qualidade do ensino e pela pesquisa científica aplicada em diversas áreas do conhecimento.",
  "O campus Itapetininga do Instituto Federal de São Paulo oferece uma ampla variedade de cursos técnicos, de graduação e de pós-graduação. Alguns dos cursos disponíveis são: Técnico em Administração, Técnico em Informática, Bacharelado em Engenharia Elétrica, Licenciatura em Matemática, Mestrado em Engenharia Elétrica, entre outros.",
  "O Instituto Federal de São Paulo, campus Itapetininga, é uma importante instituição de ensino para a região, pois oferece cursos de alta qualidade em áreas estratégicas para o desenvolvimento econômico e social. Além disso, o campus também fomenta a pesquisa científica e tecnológica, contribuindo para o avanço do conhecimento e para a solução de problemas locais e globais.",
  "A vida estudantil no campus Itapetininga é bastante dinâmica e diversificada. Além das atividades acadêmicas, os alunos têm a oportunidade de participar de atividades extracurriculares, eventos, palestras, projetos de pesquisa e extensão, grupos de estudos, entre outras iniciativas. O campus conta com uma infraestrutura moderna, biblioteca, laboratórios, áreas de convivência, restaurante universitário, alojamento estudantil, e outras facilidades que contribuem para a qualidade de vida dos estudantes.",
];

for (var i = 0; i < perguntas.length; i++) {
  let newDiv = document.createElement("div");
  newDiv.innerText = perguntas[i];
  newDiv.classList.add("pgt");

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
  };

  document.body.appendChild(newDiv);
}

pitch.onchange = function () {
  pitchValue.textContent = pitch.value;
};

rate.onchange = function () {
  rateValue.textContent = rate.value;
};
