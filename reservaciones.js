const btn = document.getElementById('enviar');
const nombre = document.getElementById('nombre');
const horaInput = document.getElementById('hora'); 

btn.addEventListener('click', function(evento) {
    evento.preventDefault(); 

   
    if (!nombre.value) {
        alert('Por favor, ingresa tu nombre.');
        return;
    }

    if (!horaInput.value) {
        alert('Por favor, selecciona una hora.');
        return;
    }
    if (!horaInput.checkValidity()) {
        alert('Por favor, elige una hora válida entre las 05:00 y las 24:00.');
        return; 
    }

    let nombreAlerta = nombre.value;
    let horaAlerta = horaInput.value;
    alert('Hola ' + nombreAlerta + ', tu reservación para el evento fue agendada correctamente a las ' + horaAlerta + ' hrs.');
});
