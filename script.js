// general DOM elements
const mostrarPedidoBtn = document.getElementById("mostrarPedido");
const resultado = document.getElementById("resultado");
const procederConPagoBtn = document.getElementById("procederConPago");
const agregarBurgerBtn = document.getElementById("agregarBurger");
const listaPedidosUl = document.getElementById("listaPedidosUl");
const borrarPedido = document.getElementById('borrarPedido');

// eventListeners

// mostrar pedido
mostrarPedidoBtn.addEventListener("click", () => {
  const hamburguesa = document.querySelector("input[name=hamburguesa]:checked").value;
  const papas = document.querySelector("input[name=papas]:checked").value;
  const bebida = document.querySelector("input[name=bebida]:checked").value;
  const postre = document.querySelector("select[name=postre]").value;
  const extras = document.querySelectorAll("input[type=checkbox]");
  const extrasSeleccionados = [];

  extras.forEach((extra) => { //esta función toma los checkboxes que están "checkeados" y los almacena en el array de extrasSeleccionados.
    if (extra.checked) {
      extrasSeleccionados.push(" " + extra.value);
    }
  });

  if (extrasSeleccionados.length === 0) {
    extrasSeleccionados.push('Sin extras');
  }

  const textoExtra = document.querySelector("textarea[name=textoExtra]").value || 'Sin notas';

  resultado.innerText = `Tu hamburguesa: ${hamburguesa}.
  Tus papas: ${papas}.
  Tu bebida: ${bebida}.
  Tu postre: ${postre}.
  Tus extras: ${extrasSeleccionados}.
  Tus notas: ${textoExtra}.`;
});

// agregar pedido a la orden
agregarBurgerBtn.addEventListener("click", () => {
  try {
    if (resultado.innerText === 'Tu burger se mostrará acá.') {
      alert('No has agregado ninguna hamburguesa');
      throw new Error('Intento incorrecto de agregar hamburguesa');
    } else {
      let nuevaBurger = document.createElement("li");
      nuevaBurger.textContent = resultado.innerText;
      listaPedidosUl.appendChild(nuevaBurger);
    }
  } catch (error) {
    console.error(error);
  }
})

// proceder con pago
procederConPagoBtn.addEventListener("click", () => {
  try {
    if (listaPedidosUl.innerText) {
      document.body.style= 'filter: blur(3px)';
    setTimeout(() => {
      window.open("pagoMock.html"); //esto abre una nueva página al dar click al botón indicado
    }, 4000)
    } else {
      alert('Aún no hay nada que pagar.');
      throw new Error('Intento de pago incorrecto.')
    }
  } catch (error) {
    console.error(error);
  }
})

// borrar último pedido añadido
borrarPedido.addEventListener("click", () => {
try {
  let lastBurger = listaPedidosUl.lastElementChild;
  listaPedidosUl.removeChild(lastBurger);
} catch (error) {
  console.error(error);
  alert('No hay nada que borrar')
}
})