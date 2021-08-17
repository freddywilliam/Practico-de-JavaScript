boton = document.getElementById("boton");
figura = document.getElementById("figura");
base = document.getElementById("valorBase")
altura = document.getElementById("valorAltura")
radio = document.getElementById("valorRadio")
lado = document.getElementById("valorLado")
boton.addEventListener("click", main )
var respuesta = document.getElementById("respuesta");

function mostrarRespuesta(nombreFigura, perimetroFigura, areaFigura)
{
    respuesta.innerHTML = "<b>" + nombreFigura + "</b>" + "<br>" + "Perimetro: " + perimetroFigura + "<br>Area: " + areaFigura  
}


function cuadrado(ladoUsuario)
{
    var perimetroCuadrado = ladoUsuario * 4
    var areaCuadrado = ladoUsuario * ladoUsuario
    mostrarRespuesta("CUADRADO", perimetroCuadrado, areaCuadrado)
}


function rectangulo(baseUsuario, alturaUsuario)
{
    var perimetroRectangulo = 2*baseUsuario + 2*alturaUsuario;
    var areaRectangulo = baseUsuario * alturaUsuario;
    mostrarRespuesta("RECTANGULO", perimetroRectangulo, areaRectangulo)
}

function circulo(radioUsuario)
{
    perimetroCirculo = 2 * Math.PI * radioUsuario
    areaCirculo = Math.PI * radioUsuario**2
    mostrarRespuesta("CIRCULO", perimetroCirculo, areaCirculo)
}

function triangulo(alturaUsuario, baseUsuario, ladoUsuario)
{
    var perimetroTriangulo = ladoUsuario * 3
    var areaTriangulo = (baseUsuario * alturaUsuario) / 2
    mostrarRespuesta("TRIANGULO", perimetroTriangulo, areaTriangulo)

}

function main()
{
    var opcionUsuario = parseInt(figura.value);
    var ladoUsuario = parseInt(lado.value);
    var baseUsuario = parseInt(base.value)
    var alturaUsuario = parseInt(altura.value)
    var radioUsuario = parseInt(radio.value)

    if (opcionUsuario == 1)
    {        
        cuadrado(ladoUsuario)
    }
    else if (opcionUsuario == 2)
    {
        rectangulo(baseUsuario, alturaUsuario)
    }

    else if (opcionUsuario == 3)
    {
        circulo(radioUsuario)
    }
    else if (opcionUsuario == 4)
    {
      
        triangulo(baseUsuario, alturaUsuario, ladoUsuario)
    }
}
