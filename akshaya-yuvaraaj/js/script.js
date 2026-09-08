if("scrollRestoration" in history){history.scrollRestoration="manual"}
window.scrollTo(0,0);
const envelopeScreen=document.getElementById("envelopeScreen"),envelope=document.getElementById("envelope"),openButton=document.getElementById("openButton"),nav=document.querySelector(".site-nav");
const bgMusic=document.getElementById("bgMusic"),soundToggle=document.getElementById("soundToggle");
let musicReady=false;
bgMusic.addEventListener("canplaythrough",()=>{musicReady=true;soundToggle.hidden=false},{once:true});
bgMusic.addEventListener("error",()=>{musicReady=false},{once:true});
bgMusic.load();
openButton.addEventListener("click",()=>{envelope.classList.add("open");openButton.disabled=true;openButton.style.opacity="0";if(musicReady){bgMusic.volume=0;bgMusic.play().catch(()=>{});let v=0;const fade=setInterval(()=>{v=Math.min(1,v+.05);bgMusic.volume=v;if(v>=1)clearInterval(fade)},80)}setTimeout(()=>{envelopeScreen.classList.add("closed-out");nav.classList.add("visible");document.body.classList.remove("locked")},2500)});
soundToggle.addEventListener("click",()=>{if(bgMusic.paused){bgMusic.play().catch(()=>{});soundToggle.classList.remove("muted")}else{bgMusic.pause();soundToggle.classList.add("muted")}});
const target=new Date("2026-10-25T07:31:00+05:30").getTime(),els={days:document.getElementById("days"),hours:document.getElementById("hours"),minutes:document.getElementById("minutes"),seconds:document.getElementById("seconds")};
function tick(){const d=Math.max(0,target-Date.now()),s=Math.floor(d/1000);els.days.textContent=Math.floor(s/86400);els.hours.textContent=String(Math.floor(s%86400/3600)).padStart(2,"0");els.minutes.textContent=String(Math.floor(s%3600/60)).padStart(2,"0");els.seconds.textContent=String(s%60).padStart(2,"0")}tick();setInterval(tick,1000);
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in-view");observer.unobserve(e.target)}}),{threshold:.14});document.querySelectorAll(".reveal").forEach(e=>observer.observe(e));