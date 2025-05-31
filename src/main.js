import { agregarNotas } from './modules/agregarNotas';
import './style.css';
import iconoBuscar from './assets/icons/search_keep.svg';

document.querySelector('#app').innerHTML = `
  <div class="keep-container">
    <header>
      <h1>Keep Clone</h1>
    </header>
    <section class="nueva-nota">
      <input type="text" placeholder="Titulo Nota..." id="titulo" />
      <textarea placeholder="Escribe la nota..." id="contenido"></textarea>
      <div class="color_container">
        <label for="color">Color:</label>
        <input type="color" id="color" value="#fff176" />
        <button id="guardarNota">Guardar Nota</button>
      </div>
      <div class="buscar_container">
        <input type="text" id="buscarNota" class="buscar_nota" placeholder="Busca la nota" />
        <img src="${iconoBuscar}" alt="Icono de buscar una nota" />
      </div>
    </section>
    <section id="contenedorNotas" class="contenedor-notas"></section>
  </div>
`
agregarNotas();