let elBurgerBtn = document.querySelector(".burger")
let elMenuBtn = document.querySelector(".burger__menu")
let elGridBtn = document.querySelector(".grid")
let elListBtn = document.querySelector(".list")
let elOpenFilter = document.querySelector(".filter__open-btn")
let elDownSect = document.querySelector(".down-sect")
let elCloseFilter = document.querySelector(".filters__close")
let elFilter = document.querySelector(".filters")
let elProductBox = document.querySelector(".products__list")

elBurgerBtn.addEventListener("click", ()=>{
  elMenuBtn.classList.toggle("open");
  elDownSect.classList.toggle("open");
})
elCloseFilter.addEventListener("click", ()=>{
  elFilter.classList.remove("simsim");
})
elOpenFilter.addEventListener("click", ()=>{
  elFilter.classList.add("simsim");
})
elGridBtn.addEventListener("click", ()=>{
  elProductBox.classList.add("ochil");
  elListBtn.classList.remove("active");
  elGridBtn.classList.add("active");
})
elListBtn.addEventListener("click", ()=>{
  elProductBox.classList.remove("ochil");
  elGridBtn.classList.remove("active");
  elListBtn.classList.add("active");
})