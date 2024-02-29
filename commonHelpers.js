import{i as u,S as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();function h(){return l.innerHTML='<div class="loader"></div>',fetch(`https://pixabay.com/api/?key=42609290-856768105ab9e79485c69bf61&q=${c}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function f(r){l.innerHTML="",console.log(r);const o=r.hits;o.length==0&&u.error({title:"Error",message:"Error: No such pictures!",position:"topRight"});const s=o.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");l.insertAdjacentHTML("beforeend",s);const i={captionsData:"alt"};let t=new d(".gallery a",i);t.on("show.simplelightbox",function(){}),t.refresh()}const l=document.querySelector("ul.gallery");let c="";const a=document.getElementById("search-input");a.addEventListener("input",r=>{c=a.value});const p=document.getElementById("search-button");p.addEventListener("click",()=>{c&&h().then(r=>f(r)).catch(r=>{console.log(r),u.error({title:"Error",message:`Error: ${r}`,position:"topRight"})})});
//# sourceMappingURL=commonHelpers.js.map
