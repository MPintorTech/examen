function actualizarStock() {
	var cantidad= parseInt(document.getElementById('numPro').value);
	var stock;

    if (cantidad == "" || cantidad == 0) {
        document.getElementById('resultado').value = "Necesita indicar una cantidad del producto";
	}
	else {
		stock=cantidad;
		document.getElementById('resultado').value= "Se han ingresado " + cantidad + " unidades del producto";
		document.getElementById('stock').value=stock;
	}
}