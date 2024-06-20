//funcionamento do botão de escolha
document.getElementById("submit").addEventListener("click", function() {
    var selectedVoice = document.getElementById("selecioneavoz").value;

    if (selectedVoice) {
      window.location.href = selectedVoice;
    } else {
      alert("Por favor, escolha um personagem antes de prosseguir.");
    }
  });

//movimento dos quadrados
const ul = document.querySelector("ul");

const random = (min, max) => Math.random() * (max - min) + min;

const randomColors = ["#ff4343", "#00b602", "#0db90d"];


for (let i = 0; i < 50; i++) {
  const li = document.createElement("li");
  
  const size = Math.floor(random(0, 25));
  const position = random(0, 100);
  const delay = random(5, 1);
  const duration = random(10, 40);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.borderRadius = "20%";

  li.style.backgroundColor = randomColors[Math.floor(random(0, 3))];

  li.style.left = `${position}%`;

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;

  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                   ${Math.random()}, ${Math.random()})`;

  ul.appendChild(li);

}

for (let i = 0; i < 250; i++) {

  const el = document.createElement("el");

  const size = Math.floor(random(0, 25));
  const position = random(0, 100);
  const delay = random(5, 1);
  const duration = random(10, 40);

  el.style.width = `${size}px`;
  el.style.height = `${size}px`;
  el.style.borderRadius = "20%";

  el.style.backgroundColor = randomColors[Math.floor(random(0, 3))];

  el.style.left = `${position}%`;

  el.style.animationDelay = `${delay}s`;
  el.style.animationDuration = `${duration}s`;

  el.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                   ${Math.random()}, ${Math.random()})`;

  ul.appendChild(el);
} 

for (let i = 0; i < 350; i++) {

    const al = document.createElement("al");

    const size = Math.floor(random(0, 25));
  
    const position = random(0, 100);
    const delay = random(5, 1);
    const duration = random(10, 40);
  
    al.style.width = `${size}px`;
    al.style.height = `${size}px`;
    al.style.borderRadius = "20%";
  
    al.style.backgroundColor = randomColors[Math.floor(random(0, 3))];
  
    al.style.left = `${position}%`;
  
    al.style.animationDelay = `${delay}s`;
    al.style.animationDuration = `${duration}s`;
  
    al.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                     ${Math.random()}, ${Math.random()})`;
  
    ul.appendChild(al);
  } 

  for (let i = 0; i < 75; i++) {

    const ter = document.createElement("ter");

    const size = Math.floor(random(0, 25));
  
    const position = random(0, 100);
    const delay = random(5, 1);
    const duration = random(10, 40);
  
    ter.style.width = `${size}px`;
    ter.style.height = `${size}px`;
    ter.style.borderRadius = "20%";
  
    ter.style.backgroundColor = randomColors[Math.floor(random(0, 3))];
  
    ter.style.left = `${position}%`;
  
    ter.style.animationDelay = `${delay}s`;
    ter.style.animationDuration = `${duration}s`;
  
    ter.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, 
                                                     ${Math.random()}, ${Math.random()})`;
  
    ul.appendChild(ter);
  } 