let searchBtn = document.getElementById("searchBtn");
let searchValue = document.getElementById("searchValue");
let load = document.getElementById("load");
let decor = document.getElementById("decor");
let card = document.getElementById("card");
let dataCard;

searchBtn.addEventListener("click", getCard);

async function getCard() {
  decor.classList.add("none");
  load.classList.remove("none");
  card.classList.add("none");
  console.log(searchValue.value)
  let response = await fetch(
    `https://api.github.com/users/${searchValue.value}`
  );
  if (response.ok) {
    dataCard = await response.json();
    console.log("Данные", dataCard);
  } 
}
