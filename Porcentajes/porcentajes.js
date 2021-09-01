var precio = document.getElementById("precio")
var porcentaje = document.getElementById("porcentaje")
var resultado_total = document.getElementById("resultado_total")
var cod_descuento = document.getElementById("cod_descuento")


function calculadora_porcentaje(precio_valor, porcentaje_valor, cantidad_descuento)
{
    return precio_valor- cantidad_descuento - (precio_valor * porcentaje_valor) / 100     
}


function cupones_comparador(cod_cupon_usuario)
{
    var data_set_cupones_25 = 1122
    if (cod_cupon_usuario == data_set_cupones_25)
    {
        return 25
    }
}


function main()
{
    var precio_valor = precio.value
    var porcentaje_valor = porcentaje.value
    var cod_desc_valor = parseInt(cod_descuento.value)
    console.log(cod_desc_valor)
    cantidad_descuento = cupones_comparador(cod_desc_valor)
    resultado = calculadora_porcentaje(precio_valor, porcentaje_valor, cantidad_descuento)
    resultado_total.innerHTML = "<br><strong>RESULTADO</strong><br>" + "Precio a pagar: $" + resultado + "<br>Descuento por cupon: " + cantidad_descuento + "%"


}
