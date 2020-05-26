// document.querySelector(".header__burger").onclick = function() {
//     open()
//   };
  
//   function open() {
//     document.querySelector(".header__menu").classList.toggle("show");
//   }
const head = document.querySelector (".header__menu");

document.querySelector(".header__burger").onclick = () => {
    document.querySelector(".header__menu").classList.toggle("show");
    document.querySelector(".header__burger").classList.toggle("show");
    document.querySelector("body").classList.toggle("lock");
  };
  