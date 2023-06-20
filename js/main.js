
function addcajaCompra(num){
    var titulo = document.getElementById("titulo-"+num+"");
    var precio = document.getElementById("precio-"+num+"");
    var canCarrito = document.getElementById("canCarrito");
    var tcompras = document.getElementById("tbcompras");
    
    var fila = tcompras.insertRow()
    var celdaObra = fila.insertCell();
    celdaObra.innerHTML = ""+titulo.textContent+"";
    var celdaPrecio = fila.insertCell();
    celdaPrecio.innerHTML = ""+precio.textContent+"";

    var celdaOpciones = fila.insertCell();
    celdaOpciones.innerHTML = "<button class='btn btn-danger' onclick='eliminarCajaCompra(this)'>Eliminar</button>";  
    //contar filas del tbody de la tabla
    canCarrito.textContent=""+tcompras.rows.length;
    $('#modalalert').modal('show');
    setTimeout(function() {
      $('#modalalert').modal('hide');
    }, 700);
}

function eliminarCajaCompra(boton) {
  var fila = boton.parentNode.parentNode;
  fila.remove();
  var tcompras = document.getElementById("tbcompras");
  var canCarrito = document.getElementById("canCarrito");
  canCarrito.textContent=""+tcompras.rows.length;
}