var tentativas = 0
function botao(){
var chute = document.getElementById("numero").value
var resultado
tentativas += 1
if(numeroSorteado>chute){
    resultado = "muito baixo"
}else if(numeroSorteado<chute){
    resultado = "muito alto"
}else if(numeroSorteado==chute){
    resultado = "parabens você acertou"
    alert(resultado)
}
document.getElementById("resultado").textContent=resultado
document.getElementById("tentativas").textContent="Tentativas: "+tentativas
}