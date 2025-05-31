import iconEliminar from '../assets/icons/delete_keep.svg';

export const agregarNotas = () => {
  const btnGuardarNota = document.getElementById('guardarNota');
  const contenedorNotas = document.getElementById('contenedorNotas');

  let notas = [];

  // ----------------------------------> Cargar Notas al Iniciar <-----------------------------------
  document.addEventListener('DOMContentLoaded', () => {
    const notasGuardadas = localStorage.getItem('notas');

    if (notasGuardadas) {
      notas = JSON.parse(notasGuardadas);
      renderizarNotas();
    }
  })

  // ----------------------------------> Guardar Nota <-----------------------------------
  btnGuardarNota.addEventListener('click', () => {
    const titulo = document.getElementById('titulo').value.trim();
    const contenido = document.getElementById('contenido').value.trim();

    if (!titulo || !contenido) {
      alert('Por favor, completa tanto el título como el contenido de la nota.');
      return;
    }

    const nuevaNota = { titulo, contenido };
    notas.push(nuevaNota);
    localStorage.setItem('notas', JSON.stringify(notas));

    renderizarNotas();
    limpiarFormulario();
  })

  // ----------------------------------> Crear HTML Nota <-----------------------------------
  const crearNota = (titulo, contenido, index = null) => {
    const nota = document.createElement('div');
    nota.classList.add('nota');
    nota.setAttribute('draggable', 'true');
    nota.dataset.index = index;

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

    // ----------------------------------> Botón Eliminar Nota <-----------------------------------
    const btnEliminar = document.createElement('button');
    const iconoEliminar = document.createElement('img');
    iconoEliminar.src = iconEliminar;
    btnEliminar.appendChild(iconoEliminar);
    btnEliminar.classList.add('btn_eliminar');
    nota.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
      eliminarNota(index);
    })

    // ----------------------------------> Drag and Drop <-----------------------------------
    nota.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', index);
      nota.classList.add('arrastrando');
    });

    nota.addEventListener('dragend', () => {
      nota.classList.remove('arrastrando');
    });

    return nota;
  }

  // ----------------------------------> Eliminar Nota <-----------------------------------
  const eliminarNota = (index) => {
    notas.splice(index, 1);
    localStorage.setItem('notas', JSON.stringify(notas));
    renderizarNotas();
  }

  // ----------------------------------> Renderizar Notas <-----------------------------------
  const renderizarNotas = () => {
    contenedorNotas.innerHTML = '';
    notas.forEach((nota, index) => {
      const elementoNota = crearNota(nota.titulo, nota.contenido, index);
      contenedorNotas.appendChild(elementoNota);
    });
  }

  // ----------------------------------> Limpiar Formulario <-----------------------------------
  const limpiarFormulario = () => {
    document.getElementById('titulo').value = '';
    document.getElementById('contenido').value = '';
  }

  // ----------------------------------> Drag and Drop Contenedor <-----------------------------------
  contenedorNotas.addEventListener('dragover', (e) => {
    e.preventDefault();
    const notaArrastrando = document.querySelector('.arrastrando');
    const notasDOM = [...contenedorNotas.querySelectorAll('.nota:not(.arrastrando)')];

    const posicion = notasDOM.find(nota => {
      const rect = nota.getBoundingClientRect();
      return e.clientY < rect.top + rect.height / 2;
    });

    if (posicion) {
      contenedorNotas.insertBefore(notaArrastrando, posicion);
    } else {
      contenedorNotas.appendChild(notaArrastrando);
    }
  });

  contenedorNotas.addEventListener('drop', () => {
    const nuevasNotas = [];
    contenedorNotas.querySelectorAll('.nota').forEach(notaEl => {
      const index = notaEl.dataset.index;
      nuevasNotas.push(notas[index]);
    });

    notas = nuevasNotas;
    localStorage.setItem('notas', JSON.stringify(notas));
    renderizarNotas();
  });
}