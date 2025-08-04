//Mensaje de Bienvenida
alert("¡Bienvenidx a nuestro catalogo web!");

// Datos del Usuario
let nombreUsuario = prompt("Por favor, ingresa tu nombre");
console.log(nombreUsuario)
let edadUsuario = parseInt(prompt("Ahora, ingresa tu edad"));
console.log(edadUsuario)

// Validacion de Edad y Bucles si mayor de edad
function validarEdad() {
  if (edadUsuario < 18) {
    console.log("Menor de edad, no puede comprar")
    alert("Lo sentimos, debes tener mas de 18 años para realizar compras.")
    return;
  } else {
    console.log("Mayor de edad, esta habilitado para comprar")
    alert("Hola " + nombreUsuario + "! Te invitamos a ver nuestros productos. ");

    //ARRAY de productos (en realidad son objetos con ID-nombre-precio)
    const misProductos = [
      { id: 1, nombre: "Anti-Age Complex", precio: 25000 },
      { id: 2, nombre: "Antioxidante con Vitamina C", precio: 24000 },
      { id: 3, nombre: "Bioserum con Niacinamida", precio: 24000 },
      { id: 4, nombre: "Concentrado de celulas madres de Rosa Alpina", precio: 30000 },
      { id: 5, nombre: "Gel de Limpieza", precio: 20000 },
      { id: 6, nombre: "Leche de limpieza", precio: 18000 },
    ]

    //LOGICA para poder mostrar mis porductos en la pantalla 
    function mostrarMisProductos() {
      let listaMisProductos = "Listado de Mis Productos\n"
      for (let i = 0; i < misProductos.length; i++) {
        const producto = misProductos[i];
        listaMisProductos += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
      }
      alert(listaMisProductos);
    }

    //ARRAY donde almacenare las seleccion del usuario (en blanco porque aun no asigne objetos)
    const carrito = []
    let totalCompra = 0
    let continuarCompra = true

    //Bucle de compras  
    while (continuarCompra) {
      function mostrarMisProductos() {
        let listaMisProductos = "Listado de Mis Productos\n"
        for (let i = 0; i < misProductos.length; i++) {
          const producto = misProductos[i];
          listaMisProductos += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
        }
        alert(listaMisProductos);
      }
      const listaDeProductos = mostrarMisProductos()
      let seleccion = parseInt(prompt("Ingresa el ID del producto que deseas agregar al carrito:"));

      let productoSeleccionado = misProductos.find(producto => producto.id === seleccion);

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



    // aca para que reciba un usaurio de su compra

    if (carrito.length > 0) {
      let resumen = "--- Resumen de tu compra ---\n";
      for (let i = 0; i < carrito.length; i++) {
        const item = carrito[i];
        resumen += `Producto: ${item.producto}, Cantidad: ${item.cantidad}, Subtotal: $${item.precio * item.cantidad}\n`;
      };
      resumen += `\nEl precio total de tu compra es: $${totalCompra}`;

      console.log(resumen);
      alert(resumen);
      // le pido el correo para mandarle el resumen de la compra en un futuro o el link de pago quizas...
      let emailUsuario = prompt("Por favor, ingresa tu correo electrónico para recibir las promociones:");
      console.log(`Correo electrónico del usuario: ${emailUsuario}`);

    } else {
      alert("No has agregado ningún producto al carrito. ¡Esperamos verte pronto!");
      return;
    }




    // le meti un switch como para que tenga recompensa por comprar

    let mensajeRecompensa = "";

    switch (true) {

      case (totalCompra >= 75000):

        mensajeRecompensa = "¡Con tu compra te llevas un agua micelar de regalo!";

        break;

      case (totalCompra >= 50000):

        mensajeRecompensa = "Felicitaciones! Haz ganado un envío gratis.";

        break;

      case (totalCompra >= 25000):

        mensajeRecompensa = "Genial! Recibiras un cupón de 10% de descuento para tu próxima compra.";

        break;

      default:

        mensajeRecompensa = "Gracias por elegirnos!";

        break;

    }

    console.log(mensajeRecompensa);
    alert(mensajeRecompensa);


  }


}

validarEdad()
