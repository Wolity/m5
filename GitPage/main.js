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
  console.log(searchValue.value);
  let response = await fetch(
    `https://api.github.com/users/${searchValue.value}`
  );
  if (response.ok) {
    dataCard = await response.json();
    console.log("Данные", dataCard);
    generateCard();
  } else {
    decor.classList.remove("none");
  }
  load.classList.add("none");
  searchValue.value = "";
}

function generateCard() {
  card.innerHTML = `      <img
  src="${dataCard.avatar_url}"
/>
<h1>${dataCard.login}</h1>
<p>${dataCard.bio}</p>
<nav>
  <div class="text-blue">
    <i class="fas fa-marker"></i>
    <span>${dataCard.location} </span>
  </div>

  <div class="text-red">
    <i class="fas fa-thumbs-up"></i>
    <span> ${dataCard.followers} </span>
  </div>

  <div class="text-yellow">
    <i class="fas fa-star"></i>
    <span> ${dataCard.following} </span>
  </div>

  <div class="text-green">
    <i class="fas fa-bookmark"></i>
    <span> ${dataCard.public_repos} </span>
  </div>
</nav>
<a href="${dataCard.html_url}"> перейти </a>`;
card.classList.remove("none")
}
