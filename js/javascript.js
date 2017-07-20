function mensaje(){
	var buscar = document.getElementsByClassName("mensaje").length;
	var msj = document.getElementById("num_class");
	msj.innerHTML = buscar;	
console.log(buscar);
	if(buscar == 1){
		alert("Es muy poco");
		msj.innerHTML = "Hay " + buscar + " clases. " + "Es muy poco";
	}else if(buscar > 2 && buscar < 4){
		alert("No está mal");
		msj.innerHTML = "Hay " + buscar + " clases. " + "No está mal";
	}else if(buscar >= 4){
		alert("Son demasiados");
		msj.innerHTML = "Hay " + buscar + " clases. " + "Son demasiadas";
	};
}
mensaje();