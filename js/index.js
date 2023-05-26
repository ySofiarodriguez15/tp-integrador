
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()


function calcularTickets()
{
    var cantidad=document.getElementById("cantidadTickets").value;
    var categoria=document.getElementById("categoriaTickets").value;


    if(cantidad<=20 && categoria == "Estudiante")
    {
        cantidad = cantidad*200 - cantidad*200*0.8
        console.log(cantidad) 
    }
    else if(cantidad<=20 && categoria=="Junior")
    {
        cantidad =cantidad*200 - cantidad*200*0.5
        console.log(cantidad)  
    }
    else if(cantidad<=20 && categoria=="Trainee")
    {
        cantidad = cantidad*200 - cantidad*200*0.15
        console.log(cantidad) 
    }
    else
        alert("Máximo de compra por persona: 20 tickets")
};


function validacionTickets()
{
    var nombre=document.getElementById("nombreTickets").value;
    var apellido=document.getElementById("apellidoTickets").value;
    var correo=document.getElementById("correoTickets").value;

    if(nombre==""|| apellido=="" || correo=="")
    {
        alert("Por favor, no deje campos sin completar")
    }
    else if(nombre=="" && apellido=="" && correo=="")
    {
        alert("Por favor, no deje campos sin completar")
    }

}