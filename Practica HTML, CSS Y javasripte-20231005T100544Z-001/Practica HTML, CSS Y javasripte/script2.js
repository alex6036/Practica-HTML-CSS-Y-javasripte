function Precio() 
{
    var motor = document.getElementById("motor");
    var motor1 = document.form1.motor[0].checked;
    var motor2 = document.form1.motor[1].checked;
    var motor3 = document.form1.motor[2].checked;
	
    var puertas = document.getElementById("puertas");
    var puertas1 = document.form1.puertas[0].checked;
    var puertas2 = document.form1.puertas[1].checked;
    var puertas3 = document.form1.puertas[2].checked;
	
    var pintura = document.getElementById("pintura");
    var pintura1 = document.form1.pintura[0].checked;
    var pintura2 = document.form1.pintura[1].checked;
    var pintura3 = document.form1.pintura[2].checked;
    var pintura4 = document.form1.pintura[3].checked;
    var pintura5 = document.form1.pintura[4].checked;
	
	var seleccion = document.getElementById("seleccion");
    var metalizada = document.form1.seleccion[0].checked;
    var llantas = document.form1.seleccion[1].checked;
    var climatizador = document.form1.seleccion[2].checked;
    var gps = document.form1.seleccion[3].checked;
    var dvd = document.form1.seleccion[4].checked;
    var preciobase = 12000;
	
    if (motor1==true)
    {
        preciobase += 0;
    }
    if (motor2==true)
    {
        preciobase += 1500;
    }
    if (motor3==true)
    {
        preciobase += 3000;
    }
    if (puertas1==true && motor1==true)
    {
        preciobase -= 2000;
    }
    if (puertas2==true)
    {
        preciobase += 0;
    }
    if (puertas3==true)
    {
        preciobase += 1500;
    }
    if (pintura1==true || pintura2==true || pintura3==true)
    {
        preciobase += 0;
    }
    if (pintura4==true)
    {
        preciobase -= 500;
    }
    if (pintura5==true)
    {
        preciobase -= 600;
    }
    if (pintura1==true && metalizada==true || pintura2==true && metalizada==true || pintura3==true && metalizada==true)
    {
        preciobase += 750;
    }
    if (llantas==true)
    {
        preciobase += 200;
    }
    if (climatizador==true)
    {
        preciobase += 800;
    }
    if (gps==true)
    {
        preciobase += 340;
    }
    if (dvd==true && puertas3==true)
    {
        preciobase += 800;
    }
    alert("Total a Cobrar: " + preciobase + " €")
}