document.addEventListener('DOMContentLoaded', () => {
    const carritoBtn = document.getElementById('carrito-btn');
    const carritoProductos = document.getElementById('carrito-productos');
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total');

    let carrito = [];

    carritoBtn.addEventListener('click', () => {
        carritoProductos.style.display = carritoProductos.style.display === 'none' || carritoProductos.style.display === '' ? 'block' : 'none';
    });

    window.agregarAlCarrito = function(nombre, precio) {
        const productoExistente = carrito.find(producto => producto.nombre === nombre);

        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carrito.push({ nombre, precio, cantidad: 1 });
        }

        actualizarCarrito();
    }

    function actualizarCarrito() {
        listaCarrito.innerHTML = '';

        let total = 0;
        carrito.forEach(producto => {
            const li = document.createElement('li');
            li.textContent = `${producto.nombre} - ${producto.cantidad} x ${producto.precio} Bs`;
            listaCarrito.appendChild(li);

            total += producto.precio * producto.cantidad;
        });

        totalCarrito.textContent = `Total: ${total.toFixed(2)} Bs`;
    }
});
