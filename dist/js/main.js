(()=>{"use strict";const e=({timing:e,draw:t,duration:n})=>{let o=performance.now();requestAnimationFrame((function l(s){let r=(s-o)/n;r>1&&(r=1);let c=e(r);t(c),r<1&&requestAnimationFrame(l)}))},t=(t,n,o,l)=>{const s=document.querySelectorAll(t),r=document.querySelector(n),c=document.querySelector(o);s.forEach((t=>{t.addEventListener("click",(()=>{let t=window.scrollY;console.log(t),document.body.style.position="fixed",document.body.style.top=`-${t}px`,screen.width<=768?(r.style.display="block",c.style.display="block"):(r.style.display="block",c.style.display="block",e({duration:500,timing:e=>Math.pow(e,2),draw(e){const t=document.documentElement.clientHeight;r.style.top=e*(t/3+200)+"px"}}))}))})),r.addEventListener("click",(e=>{if(e.target.classList.contains(l)){r.style.display="none",c.style.display="none";const e=document.body.style.top;document.body.style.position="",document.body.style.top="",window.scrollTo(0,-1*parseInt(e||"0"))}})),c.addEventListener("click",(e=>{e.target.classList.contains("overlay")&&(r.style.display="none",c.style.display="none",document.body.style.position="",document.body.style.top="")}))};t(".header-btn",".header-modal",".overlay","header-modal__close"),t(".service-button",".services-modal",".overlay","services-modal__close"),(e=>{const t=document.querySelector("#timer-days"),n=document.querySelector("#timer-hours"),o=document.querySelector("#timer-minutes"),l=document.querySelector("#timer-seconds"),s=()=>{let r=function(){let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}}();const c=e=>e<10?"0"+e:e;t.textContent=c(r.days),n.textContent=c(r.hours),o.textContent=c(r.minutes),l.textContent=c(r.seconds);let a=setInterval(s,1e3);r.timeRemaining<=0&&(n.textContent="00",o.textContent="00",l.textContent="00",clearInterval(a))};s()})("15 july 2022"),(()=>{try{const e=document.querySelector(".slider"),t=document.querySelectorAll(".service-block"),n=3e3;let o,l=0;const s=(e,t)=>{screen.width>=576?(e[t].style.display="none",e[t+1].style.display="none"):e[t].style.display="none"},r=(e,t)=>{screen.width>=576?(e[t].style.display="block",e[t+1].style.display="block"):e[t].style.display="block"},c=()=>{s(t,l),screen.width>=576?l+=2:l++,l>=t.length&&(l=0),r(t,l)},a=(e=2e3)=>{o=setInterval(c,e)},i=()=>{clearInterval(o)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.classList.contains("services__arrow")||(s(t,l),e.target.closest(".services__arrow--right")?screen.width>=576?l+=2:l++:e.target.closest(".services__arrow--left")&&(screen.width>=576?l-=-2:l--),l>=t.length&&(l=0),l<0&&(l=t.length-1),r(t,l))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".services__arrow")&&i()}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".services__arrow")&&a(n)}),!0),a(n)}catch(e){}})(),(t=>{try{const n=document.querySelector("#calc"),o=document.querySelector("#calc-type"),l=document.querySelector("#calc-type-material"),s=document.querySelector("#calc-input"),r=document.querySelector("#calc-total");s.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}));const c=()=>{const n=+o.options[o.selectedIndex].value;let c,a=s.value,i=0;c=l.value>0?+l.options[l.selectedIndex].value:1,n&&a?(i=t*a*n*c,e({duration:500,timing:e=>e,draw(e){r.value=Math.trunc(i*Math.trunc(10*e)/10)}})):i=0,r.value=i};n.addEventListener("input",(e=>{e.target!==o&&e.target!==s&&e.target!==l||c()}))}catch(e){}})(1e3)})();