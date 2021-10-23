let elBurgerBtn = document.querySelector(".burger")
let elMenuBtn = document.querySelector(".burger__menu")
let elDownSect = document.querySelector(".down-sect")

elBurgerBtn.addEventListener("click", ()=>{
  elMenuBtn.classList.toggle("open");
  elDownSect.classList.toggle("open");
})