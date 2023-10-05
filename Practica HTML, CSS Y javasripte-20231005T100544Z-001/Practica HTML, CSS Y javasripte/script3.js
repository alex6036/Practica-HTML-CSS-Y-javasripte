function Nota()
{
    var pregunta1 = document.getElementById("pregunta1");
    var opcion1a = document.form1.pregunta1[0].checked;
    var opcion1b = document.form1.pregunta1[1].checked;
    var opcion1c = document.form1.pregunta1[2].checked;
    var opcion1d = document.form1.pregunta1[3].checked;
	
    var pregunta2 = document.getElementById("pregunta2");
    var opcion2a = document.form1.pregunta2[0].checked;
    var opcion2b = document.form1.pregunta2[1].checked;
    var opcion2c = document.form1.pregunta2[2].checked;
    var opcion2d = document.form1.pregunta2[3].checked;
	
    var pregunta3 = document.getElementById("pregunta3");
    var opcion3a = document.form1.pregunta3[0].checked;
    var opcion3b = document.form1.pregunta3[1].checked;
    var opcion3c = document.form1.pregunta3[2].checked;
    var opcion3d = document.form1.pregunta3[3].checked;
	
    var pregunta4 = document.getElementById("pregunta4");
    var opcion4a = document.form1.pregunta4[0].checked;
    var opcion4b = document.form1.pregunta4[1].checked;
    var opcion4c = document.form1.pregunta4[2].checked;
    var opcion4d = document.form1.pregunta4[3].checked;
	
    var pregunta5 = document.getElementById("pregunta5");
    var opcion5a = document.form1.pregunta5[0].checked;
    var opcion5b = document.form1.pregunta5[1].checked;
    var opcion5c = document.form1.pregunta5[2].checked;
    var opcion5d = document.form1.pregunta5[3].checked;
	
        var aciertos = 0;
        var numpreg = 5;
		
    if (opcion1c==true)
    {
        aciertos += 1;
        
    }
	
    if (opcion2b==true)
    {
        aciertos += 1;   
    }
	
    if (opcion3d==true)
    {
        aciertos += 1;
    }
	
    if (opcion4d==true)
    {
        aciertos += 1;
    }
	
    if (opcion5a==true)
    {
        aciertos += 1;
    }
	
    var nota = parseFloat((aciertos / numpreg) * 10);
    alert("Nota final: " +nota);

}