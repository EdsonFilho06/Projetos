function somar(){
    
    var num1 = document.getElementById('num1').value;//pegar os valores dos campos
    var num2 = document.getElementById('num2').value;
    var resultado = parseFloat(num1) + parseFloat(num2);//realizar a soma
    document.getElementById('resultado').innerHTML = "resultado: " + resultado.toFixed(2);//mostrar o resultado no campo de resultado
}
function subtrair(){
    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseFloat(num1) - parseFloat(num2);
    document.getElementById('resultado').innerHTML = "resultado: " + resultado.toFixed(2);
}
function multiplicar(){
    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseFloat(num1) * parseFloat(num2);
    document.getElementById('resultado').innerHTML = "resultado: " + resultado.toFixed(2);
}
function dividir(){
    
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = parseFloat(num1) / parseFloat(num2);
    document.getElementById('resultado').innerHTML = "resultado: " + resultado.toFixed(2);//mostrar o resultado no campo de resultado
}