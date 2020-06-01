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


var btn = document.getElementById('btnshow');
    btn.onclick = function(e) {
      var element = document.querySelector(".hidden");
      if(element.classList.contains("show-hidden")) {
    element.classList.remove("show-hidden");
    btn.innerHTML = "Show More";
    } else {
      element.classList.add("show-hidden");
      btn.innerHTML = "Close";
    }
}