function fondo()
{
    var div1 = document.getElementById("div1");
    div1.style.backgroundColor = getRandomColor();
}

function Texto() 
{
    var div1 = document.getElementById("div1");
    var nuevoTexto = prompt("Introduzca texto");
    div1.textContent = nuevoTexto;
}

function TipoYColor() 
{
    var div1 = document.getElementById("div1");
    var nuevoTipoDeLetra = prompt("Introduzca el tipo de letra");
    var nuevoColorDeLetra = prompt("Introduce el color de letra");
    div1.style.fontFamily = nuevoTipoDeLetra;
    div1.style.color = nuevoColorDeLetra;
}

function getRandomColor() 
{
    var letras = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) 
    {
        color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
}