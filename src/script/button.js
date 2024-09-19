function botao(){
var chute = document.getElementById("numero").value
var resultado
if(numeroSorteado>chute){
    resultado = "muito baixo"
}else if(numeroSorteado<chute){
    resultado = "muito alto"
}else if(numeroSorteado==chute){
    resultado = "parabens você acertou"
}
alert(resultado)
document.getElementById("resultado").textContent=resultado
}