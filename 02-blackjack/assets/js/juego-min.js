const miModulo=(()=>{"use strict";let e=[],t=["C","D","H","S"],r=["A","J","Q","K"],l=[],a=document.querySelectorAll("small"),n=document.querySelectorAll(".divCartas"),d=(t=2)=>{console.clear(),e=s(),l=[];for(let r=0;r<t;r++)l.push(0),a[r].innerText=0,n[r].innerHTML="";f.disabled=!1,h.disabled=!1},s=()=>{e=[];for(let l=2;l<=10;l++)for(let a of t)e.push(l+a);for(let n of t)for(let d of r)e.push(d+n);return _.shuffle(e)},i=()=>{if(0===e.length)throw"No hay cartas en el deck";return e.pop()},o=e=>{let t=e.substring(0,e.length-1);return isNaN(t)?"A"===t?11:10:1*t},c=(e,t)=>(l[t]+=o(e),a[t].innerText=l[t],l[t]),u=(e,t)=>{let r=document.createElement("img");r.src=`assets/cartas/${e}.png`,r.classList.add("carta"),n[t].append(r)},$=()=>{let[e,t]=l;setTimeout(()=>{t===e?alert("Nadie gana"):e>21?alert("Computadora gana"):t>21&&alert("Jugador Gana")},20)},b=e=>{let t=0;do{let r=i();if(t=c(r,l.length-1),u(r,l.length-1),e>21)break}while(t<e&&(e=21));$()},f=document.querySelector("#btnPedir"),h=document.querySelector("#btnDetener"),g=document.querySelector("#btnNuevo");return f.addEventListener("click",()=>{let e=i(),t=c(e,0);u(e,0),t>21?(console.warn("Lo siento mucho, perdiste"),f.disabled=!0,h.disabled=!0,b(t)):21===t&&(console.warn("21!!!!"),f.disabled=!0,h.disabled=!0,b(t))}),h.addEventListener("click",()=>{let e=l[0];b(e),f.disabled=!0,h.disabled=!0}),g.addEventListener("click",()=>{d()}),{nuevoJuego:d}})();