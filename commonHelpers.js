import{i as a,S as u}from"./assets/vendor-5b791d57.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=document.querySelector("ul.gallery");let i="";const c=document.getElementById("search-input");c.addEventListener("input",t=>{i=c.value,console.log(i)});const d=document.getElementById("search-button");d.addEventListener("click",()=>{i&&g().then(t=>m(t)).catch(t=>{console.log(t),a.error({title:"Error",message:`Error: ${t}`,position:"topRight"})})});function g(){return fetch(`https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function m(t){console.log(t);const n=t.map(o=>{`${o.imageURL}${o.webformatURL}${o.imageURL}${o.tags}`}).join("");f.insertAdjacentHTML("beforeend",n)}const p={captionsData:"alt"};let h=new u(".gallery a",p);h.on("show.simplelightbox",function(){});
//# sourceMappingURL=commonHelpers.js.map
