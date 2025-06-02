import { agregarNotas } from './modules/agregarNotas';
import './style.css';
import iconoBuscar from './assets/icons/search_keep.svg';

document.querySelector('#app').innerHTML = `
  <div class="keep-container">
    <section class="nueva-nota">
      <div class="buscar_container">
        <input type="text" id="buscarNota" class="buscar_nota" placeholder="Busca la nota" />
        <img src="${iconoBuscar}" alt="Icono de buscar una nota" />
      </div>
      <header>
        <h1>Keep Clone</h1>
      </header>
      <div class="campo">
        <input type="text" id="titulo" required />
        <label for="titulo">Titulo Nota...</label>
      </div>
      <div class="campo">
        <textarea id="contenido" required></textarea>
        <label for="contenido">Contenido de la Nota</label>
      </div>
      <div class="color_container">
        <label for="color">Color de la Nota:</label>
        <input type="color" id="color" value="#fff176" />
      </div>
      <button id="guardarNota">Guardar Nota</button>
    </section>
    <section id="contenedorNotas" class="contenedor-notas"></section>
  </div>
`
agregarNotas();