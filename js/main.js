(function() {
  'use strict';
// ////////////////////////////
  var btnScrollDown = document.querySelector('#scroll_down');
  function scrollDown() {
    var windowCoords = document.documentElement.clientHeight;
    (function scroll() {
      if (window.pageYOffset < windowCoords) {
        window.scrollBy(0, 7);
        setTimeout(scroll, 0);
      }
      if (window.pageYOffset > windowCoords) {
        window.scrollTo(0, windowCoords);
      }
    })();
  }
  btnScrollDown.addEventListener('click', scrollDown);
})();
// ///////////////////////////////////////////////////////////
const head = document.querySelector (".header__menu");
document.querySelector(".header__burger").onclick = () => {
    document.querySelector(".header__menu").classList.toggle("show");
    document.querySelector(".header__burger").classList.toggle("show");
    document.querySelector("body").classList.toggle("lock");
  };
// //////////////////////////////////////////
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
// //////////////////////////////////////
var linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
    V = 0.3;  // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function(e) { //по клику на ссылку
        e.preventDefault(); //отменяем стандартное поведение
        var w = window.pageYOffset,  // производим прокрутка
            hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
        t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
            start = null;
        requestAnimationFrame(step);
        function step(time) {
            if (start === null) start = time;
            var progress = time - start,
                r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
            window.scrollTo(0,r);
            if (r != w + t) {
                requestAnimationFrame(step)
            } else {
                location.hash = hash  // URL с хэшем
            }
        }
    }, false);
}
// /////////////////////////////////////////