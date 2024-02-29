import{i as u,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const c=document.querySelector("ul.gallery");let n="";const a=document.getElementById("search-input");a.addEventListener("input",r=>{n=a.value,console.log(n)});const g=document.getElementById("search-button");g.addEventListener("click",()=>{n&&d().then(r=>h(r)).catch(r=>{console.log(r),u.error({title:"Error",message:`Error: ${r}`,position:"topRight"})})});function d(){return fetch(`https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${n}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function h(r){c.innerHTML="",console.log(r);const o=r.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const s=o.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="100%"
            src="${t.webformatURL}"
            data-source="${t.largeImageURL}"
            alt="${t.tags}"
          />
        </a>
      </li>`).join("");c.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};new f(".gallery a",i).on("show.simplelightbox",function(){})}
//# sourceMappingURL=commonHelpers.js.map
