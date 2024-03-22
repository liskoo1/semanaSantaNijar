
// recorremos todos los li
document.querySelectorAll(".calendarionav li a").forEach(li =>{
    //insertamos el evento
    li.addEventListener("click", function(e){
        //
        document.querySelectorAll(".calendarionav li a").forEach(enl =>{
            enl.classList.remove("activo");
        });  
        this.classList.add("activo");
    });
    
});

