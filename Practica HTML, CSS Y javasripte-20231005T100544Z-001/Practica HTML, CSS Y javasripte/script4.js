var form1 = document.getElementById("form1");

var nombre = document.getElementById("nombre");

var apellido1 = document.getElementById("apellido1");

var apellido2 = document.getElementById("apellido2");

var correo = document.getElementById("correo");

var provincia = document.getElementById("provincia");

var num_ss1 = document.getElementById("num_ss1");

var num_ss2 = document.getElementById("num_ss2");

var enviarBoton = document.getElementById("enviar");

var borrarBoton = document.getElementById("borrar");

enviarBoton.addEventListener("click", function() 
{
    if (validar())
    {
        form1.submit(); 
    }
}
);

borrarBoton.addEventListener("click", function() 
{
    form1.reset();
}
);

function validar() 
{
    if (nombre.value == "") 
    {
        nombre.focus();
            alert("El campo nombre no puede estar vacío");
        return false;
    }
    if (apellido1.value == "") 
    {
        apellido1.focus();
            alert("El campo del primer apellido no puede estar vacío");
        return false;
    }
    if (apellido2.value == "") 
    {
        apellido2.focus();
            alert("El campo del segundo apellido no puede estar vacío");
        return false;
    }
    if (correo.value == "") 
    {
        correo.focus();
            alert("El campo de correo no puede estar vacío");
        return false;
    }   
	else 
    {
        var email = correo.value;
        var pos = email.indexOf("@");
        var pos1 = email.indexOf(".");
            if (pos == -1 || pos1 == -1) 
            {
                correo.focus();
                    alert("El correo debe tener un formato válido");
                return false;
            }
            if(pos1<pos)
            {
                correo.focus();            
                    alert("El . no puede ir antes del @");
                return false;
            }
    }
    if (provincia.value == "")
    {
        provincia.focus();
            alert("Seleccione una provincia");
        return false;
    }
    if (num_ss1.value == "")
    {
        num_ss1.focus();
            alert("Rellene el campo del primer número");
        return false;
    }
    if (isNaN (num_ss1.value))
    {
        num_ss1.focus();
            alert("Sólo se permiten números");
        return false;
    } 
    else if (num_ss1.value.length != 7) 
    {
        num_ss1.focus();
            alert("Debe ser un número de 7 dígitos");
        return false;
    }
    if (num_ss2.value == "")
    {
        num_ss2.focus();
            alert("Rellene el campo del segundo número");
        return false;
    }
    if (isNaN (num_ss2.value))
    {
        num_ss2.focus();
            alert("Sólo se permiten números");
        return false;
    } 
    else if (num_ss2.value.length > 2)
    {
        numss2.focus();
        alert("Debe ser un número de 1 o 2 dígitos");
        return false;
    }
    alert ("Datos correctos");
}