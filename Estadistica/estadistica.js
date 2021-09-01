media_mostrar = document.getElementById("media_mostrar")
moda_mostrar = document.getElementById("moda_mostrar")
mediana_mostrar = document.getElementById("mediana_mostrar")


function media(lista, length_lista)
{
    var suma = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento 
        }
    )
    return suma /length_lista
}


function mediana(lista, length_lista)
{
    var mitad_lista = length_lista / 2
    if (length_lista % 2 == 0)
    {
        
        var moda_superior = lista[mitad_lista]
        var moda_inferior = lista[mitad_lista - 1]
       
        return (moda_superior + moda_inferior) / 2
    }
    else
    {  
        return lista[mitad_lista - 0.5]
    }
}



function moda(lista)
{
    lista.map(
        function(elemento)
        {
            if (listCont[elemento])
            {
                listCont[elemento] += 1
            }
            else {
            listCont[elemento] = 1
            }

            // return listCont
        }
    );

}

function main()
{
    var lista = [100,200,300,240,140,100, 200, 100, 100]
    lista.sort()

    length_lista = lista.length

    media_valor = media(lista, length_lista)
    media_mostrar.innerHTML = media_valor

    mediana_valor = mediana(lista, length_lista)
    mediana_mostrar.innerHTML = mediana_valor

    moda_valor = moda(lista)
    moda.innerHTML = moda_valor


}

main()