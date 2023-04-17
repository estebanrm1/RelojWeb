const date = document.getElementById('date'),
time = document.getElementById('time');

function fechaSistema(){
    const fechaActual = new Date(),
    opciones = {
        weekday: 'long', year: 'numeric', month:'long', day:'numeric'
    }
    date.innerHTML = fechaActual.toLocaleDateString('es', opciones)
}

function agregarCero(value){
    return value < 10 ? `0${value}`: value;
}

function horaSistema(){
    const horaActual = new Date(),
    horas =horaActual.getHours(),
    minutos = agregarCero(horaActual.getMinutes()),
    segundos = agregarCero(horaActual.getSeconds()),
    formato = (horas < 12) || ( horas == 24) ? 'AM' : 'PM',
    formatoHora = agregarCero((horas + 11) % 12 + 1);
    
    time.innerHTML = `${formatoHora}:${minutos}:${segundos}
    <small>${formato}</small>`;
}


fechaSistema();
setInterval(horaSistema, 1000);