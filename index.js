const button = document.querySelector(".container");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const telegram = document.querySelector(".telegram");
const instagram = document.querySelector(".instagram");
const whatsapp = document.querySelector(".whatsapp");
const vkontakte = document.querySelector(".vkontakte");
const logos = document.querySelectorAll("i");
const allElements = [
  button,
  bar1,
  bar2,
  telegram,
  instagram,
  whatsapp,
  vkontakte,
  logos[0],
  logos[1],
  logos[2],
  logos[3],
];

button.addEventListener("click", expand);

function expand() {
  allElements.forEach((element) => element.classList.toggle("exp"));
}
