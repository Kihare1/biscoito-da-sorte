const screen1 = document.querySelector(".card1")
const screen2 = document.querySelector(".card2")
const closedCookie = document.querySelector("#closedCookie")
const btn = document.querySelector("#tryAgain")
const luckyText = document.querySelector("#luckyText")
const frases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "A maior de todas as torres começa no solo.",
  "Não há que ser forte. Há que ser flexível.",
  "Siga os bons e aprenda com eles.",
  "A juventude não é uma época da vida, é um estado de espírito.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
  "O bom-senso vale mais do que muito conhecimento.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "São os nossos amigos que nos ensinam as mais valiosas lições.",
  "Aquele que se importa com o sentimento dos outros, não é um tolo.",
  "A adversidade é um espelho que reflete o verdadeiro eu.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Uma bela flor é incompleta sem as suas folhas.",
  "Sem o fogo do entusiasmo, não há o calor da vitória.",
]
let randomNumber = Math.round(Math.random() * frases.length)

closedCookie.addEventListener("click", clickImg)
btn.addEventListener("click", toggleScreen)

function clickImg() {
  randomNumber--
  luckyText.innerText = frases[randomNumber]
  toggleScreen()
  randomNumber = Math.round(Math.random() * frases.length)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
