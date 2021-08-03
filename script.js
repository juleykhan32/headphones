document.querySelector(".header__burger").addEventListener("click", () => {
  document.querySelector(".header__burger").classList.toggle("active");
  document.querySelector(".circle__menu").classList.toggle("close");
  document.querySelector(".header__menu").classList.toggle("menu_hide");
});
