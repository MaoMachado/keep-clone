export const agregarNotas = () => {
  const btnGuardarNota = document.getElementById('guardarNota');
  const contenedorNotas = document.getElementById('contenedorNotas');

  btnGuardarNota.addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value.trim();
    const contenido = document.getElementById('contenido').value.trim();

    if (!titulo || !contenido) {
      alert('Por favor, completa tanto el título como el contenido de la nota.');
      return;
    }

    const nota = crearNota(titulo, contenido);
    contenedorNotas.appendChild(nota);

    limpiarFormulario();
  })

  const crearNota = (titulo, contenido) => {
    const nota = document.createElement('div');
    nota.classList.add('nota')

    if (titulo) {
      const h3 = document.createElement('h3');
      h3.textContent = titulo;
      nota.appendChild(h3);
    }

    if (contenido) {
      const p = document.createElement('p');
      p.textContent = contenido;
      nota.appendChild(p);
    }

    return nota;
  }

  const limpiarFormulario = () => {
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
  }
}