function actualizarStock() {
    var cantidad=document.getElementById('numPro').value;

    if (cantidad == "" || cantidad == 0) {
        document.getElementById('resultado').value = "Necesita indicar una cantidad del producto";
	}
	else {
		document.getElementById('resultado').value= "Se han ingresado " + cantidad + " unidades del producto";
	}
}