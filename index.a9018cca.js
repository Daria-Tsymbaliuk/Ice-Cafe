!function(){let e=1;function t(t){let l;let n=document.getElementsByClassName("mySlides"),o=document.getElementsByClassName("dot");for(t>n.length&&(e=1),t<1&&(e=n.length),l=0;l<n.length;l++)n[l].style.display="none";for(l=0;l<o.length;l++)o[l].className=o[l].className.replace(" active","");n[e-1].style.display="block",o[e-1].className+=" active"}t(1),window.plusSlides=function(l){t(e+=l)},window.currentSlide=function(l){t(e=l)},(()=>{let e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),l=document.querySelector(".js-close-menu"),n=()=>{let l="true"===t.getAttribute("aria-expanded");t.setAttribute("aria-expanded",!l),e.classList.toggle("is-open"),bodyScrollLock[l?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),l.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",l=>{l.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})()}();
//# sourceMappingURL=index.a9018cca.js.map
