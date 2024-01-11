let precio = 400000;

const precioBase = document.querySelector(".precio-inicial");
const nuevaCantidad = document.querySelector(".cantidad");
const botonSumar = document.querySelector(".sumar");
const botonRestar = document.querySelector(".restar");
const nuevoValor = document.querySelector(".valor-total");

precioBase.innerHTML = precio;
nuevaCantidad.innerHTML = 0;
nuevoValor.innerHTML = 0;

function actualizarTotal() {
  const cantidad = nuevaCantidad.innerHTML;
  const totalPagar = precio * cantidad;
  nuevoValor.innerHTML = totalPagar;
}

botonSumar.addEventListener("click", function () {
    nuevaCantidad.innerHTML++;
  actualizarTotal();
});

botonRestar.addEventListener("click", function () {
  if (nuevaCantidad.innerHTML > 0) {
    nuevaCantidad.innerHTML--;
    actualizarTotal();
  }
});