alert("¡Bienvenidx a nuestro catalogo web!");

let nombreUsuario = prompt("Por favor, ingresa tu nombre");
let edadUsuario = parseInt(prompt("Ahora, ingresa tu edad"));

if (edadUsuario < 18) {
    console.log("Lo sentimos, debes tener mas de 18 años para realizar compras.")
    alert("Lo sentimos, debes tener mas de 18 años para realizar compras.")
    
} else {
    alert("Hola " + nombreUsuario + "! Te invitamos a ver nuestros productos")


}



const productos = [
    { id:1, nombre: "Anti-Age Complex", precio: 25000 },
    { id:2, nombre: "Antioxidante con Vitamina C", precio: 24000 },
    { id:3, nombre: "Bioserum con Niacinamida", precio: 24000 },
    { id:4, nombre: "Concentrado de celulas madres de Rosa Alpina", precio: 30000 },
    { id:5, nombre: "Gel de Limpieza", precio: 20000 },
    { id:6, nombre: "Leche de limpieza", precio: 18000 },
]

function mostrarProductos() {
    let listaProductos = "--- Mis Productos --- \n";
    productos.forEach(producto => {
        listaProductos += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
    });
    alert(listaProductos);
}

mostrarProductos()

let carrito = []
let totalCompra = 0

//--------

let continuarCompra = true;

 while (continuarCompra) {

 let seleccion = parseInt(prompt("Ingresa el ID del producto que deseas agregar al carrito:"));

 let productoSeleccionado = productos.find(producto => producto.id === seleccion);

 if (productoSeleccionado) {

    let cantidad = parseInt(prompt(`¿Cuántos ${productoSeleccionado.nombre} deseas comprar?`));

 if (cantidad > 0) {

   carrito.push({

   producto: productoSeleccionado.nombre,
   precio: productoSeleccionado.precio,
   cantidad: cantidad

        });

  totalCompra += productoSeleccionado.precio * cantidad;

        continuarCompra = confirm("¿Quieres agregar otro producto al carrito?");

      } else {

        alert("Cantidad no válida. El producto no se agregó al carrito.");

        continuarCompra = confirm("¿Quieres agregar otro producto al carrito?");

      }

    } else {

      alert("ID de producto no válido. Por favor, intenta de nuevo.");

      continuarCompra = confirm("¿Quieres agregar otro producto al carrito?");

    }

  }



  //Resumen de la compra

  if (carrito.length > 0) {

    console.log("--- Resumen de tu compra ---");

    carrito.forEach(item => {

      console.log(`Producto: ${item.producto}, Cantidad: ${item.cantidad}, Subtotal: $${item.precio * item.cantidad}`);

    });

    console.log(`El precio total de tu compra es: $${totalCompra}`);

    alert(`El precio total de tu compra es: $${totalCompra}`);

     }

      // --- LÓGICA CON SWITCH PARA ASIGNAR RECOMPENSAS ---

    let mensajeRecompensa = "";

    switch (true) {

      case (totalCompra >= 100000):

        mensajeRecompensa = "¡Por tu compra, te llevas un producto de regalo! 🎉";

        break;

      case (totalCompra >= 50000):

        mensajeRecompensa = "¡Felicidades! Tu compra incluye un envío gratis. 🚚";

        break;

      case (totalCompra >= 25000):

        mensajeRecompensa = "¡Genial! Recibiste un cupón de 10% de descuento para tu próxima compra.";

        break;

      default:

        mensajeRecompensa = "¡Gracias por tu compra! Sigue sumando para obtener recompensas.";

        break;

    }

    

    console.log(mensajeRecompensa);

    alert(mensajeRecompensa);

   