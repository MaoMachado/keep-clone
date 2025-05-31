(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d=()=>{const i=document.getElementById("guardarNota"),n=document.getElementById("contenedorNotas");i.addEventListener("click",()=>{const e=document.getElementById("titulo").value.trim(),t=document.getElementById("contenido").value.trim();if(!e||!t){alert("Por favor, completa tanto el título como el contenido de la nota.");return}const o=a(e,t);n.appendChild(o),c()});const a=(e,t)=>{const o=document.createElement("div");if(o.classList.add("nota"),e){const r=document.createElement("h3");r.textContent=e,o.appendChild(r)}if(t){const r=document.createElement("p");r.textContent=t,o.appendChild(r)}return o},c=()=>{document.getElementById("titulo").value="",document.getElementById("contenido").value=""}};document.querySelector("#app").innerHTML=`
  <div class="keep-container">
    <header>
      <h1>Keep Clone</h1>
    </header>
    <section class="nueva-nota">
      <input type="text" placeholder="Titulo Nota..." id="titulo" />
      <textarea placeholder="Escribe la nota..." id="contenido"></textarea>
      <button id="guardarNota">Guardar Nota</button>
    </section>
    <section id="contenedorNotas" class="contenedor-notas"></section>
  </div>
`;d();
