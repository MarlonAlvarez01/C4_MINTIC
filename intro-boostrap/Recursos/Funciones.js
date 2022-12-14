
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
        }else{
            RegistrarPersona();
            event.preventDefault()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function RegistrarPersona(){
    let nombres = document.querySelector("#txtNombres").value;
    let Apellidos = document.querySelector("#txtApellidos").value;
    let Correo = document.querySelector("#txtCorreo").value;
    let Celular = document.querySelector("#txtCelular").value;

    let url = `http://localhost:3000/personas`;
    let datos = {
        nombres: nombres,
        Apellidos:Apellidos,
        Correo:Correo,
        Celular:Celular
    };
    fetch(url, {
        method: 'post',
        body: JSON.stringify(datos),
        headers:{
            'Content-Type':'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje)
    })
}