let btn=document.getElementById("enviar");
let btn=document.getElementById("nombre");
btn.addEventListener("click",function(evento){


    evento.preventDefault();
    let nombreAlerta=nombre.value;
      
    alert("Hola "  + nombreAlerta " tu reservación para sesión fotografica fue agendada correctamente ");
  
});
