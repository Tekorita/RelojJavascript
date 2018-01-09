(function(){

	// var fecha = new Date();
	// // console.log(fecha);

	// // extraer horas
	// console.log(fecha.getHours());

	// // extraer Minutos
	// console.log(fecha.getMinutes());

	// // extraer Segundos
	// console.log(fecha.getSeconds());

	// // extraer dia

	
	// 		getDay= ["0 Domingo", "1 Lunes", "2 Martes", "3 Miercoles", "4 Jueves","5 Viernes", "6 Sabado"];

			
	
	// console.log(fecha.getDay());

	// // extraer dia del mes
	// console.log(fecha.getDate());

	// // extraer mes
	// console.log(fecha.getMonth());

	// // extraer año
	// console.log(fecha.getFullYear());

	
	var actualizarHora = function() {
		var fecha = new Date(),
			horas = fecha.getHours(),
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear(),
			ampm;

		var pHoras = document.getElementById("horas"),
			pAMPM = document.getElementById("ampm"),
			pMinutos = document.getElementById("minutos"),
			pSegundos = document.getElementById("segundos"),
			pDiaSemana = document.getElementById("diaSemana"),
			pDia = document.getElementById("dia"),
			pMes = document.getElementById("mes"),
			pYear = document.getElementById("year");

		var semana= ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado"]; 
		pDiaSemana.textContent = semana[diaSemana];

		var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre","Octubre","Noviembre","Diciembre"];
		pMes.textContent = meses[mes];

		pYear.textContent = year;

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		}else{
			ampm = 'AM';
		}

		if (horas == 0){
			horas = 12;
		} 

		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		if (minutos < 10){
			minutos = "0" + minutos;
		}

		if (segundos < 10){
		   	segundos = "0" + segundos;
		}

		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;

	}	


	actualizarHora();

	var intervalo = setInterval(actualizarHora, 1000);


}())