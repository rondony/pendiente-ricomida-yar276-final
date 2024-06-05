const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

$("#press").click(function(){
    alert('El correo fue enviado correctamente')
})

$("#ingredientes").click(function(){
$(this).css("color", "red")
})

$("#preparacion").click(function(){
$(this).css("color","red")
})

$("#panqueques").click(function(){
    $("#panqueques1").toggle();
})

$("#tiramisu").click(function(){
    $("#tiramisu1").toggle();
})

$("#plateada").click(function(){
    $("#plateada1").toggle();
})
