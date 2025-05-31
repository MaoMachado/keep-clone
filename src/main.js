import { agregarNotas } from './modules/agregarNotas'
import './style.css'

document.querySelector('#app').innerHTML = `
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
`
agregarNotas();