let burger = document.getElementById("burger");
let menu = document.getElementById("menu");

burger.addEventListener("click", activeMenu);

let active = false;

function activeMenu() { 
    console.log(active)
  active = !active;
  if (active) {
    menu.style.top = "100%";
  } else {
    menu.style.top = "-500%";
  }
}
