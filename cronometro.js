
var cronometro;
var tempoInicial;
var pausado = true;

function iniciarCronometro() {
  if (pausado) {
    pausado = false;
    tempoInicial = new Date().getTime();
    cronometro = setInterval(atualizarCronometro, 1000);
  }
}

function pausarCronometro() {
  pausado = true;
  clearInterval(cronometro);
}

function resetarCronometro() {
  pausado = true;
  clearInterval(cronometro);
  document.getElementById('cronometro').innerText = '00:00:00';
}

function atualizarCronometro() {
  var agora = new Date().getTime();
  var diferenca = agora - tempoInicial;
  
  var horas = Math.floor(diferenca / (1000 * 60 * 60));
  var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  horas = ('0' + horas).slice(-2);
  minutos = ('0' + minutos).slice(-2);
  segundos = ('0' + segundos).slice(-2);

  document.getElementById('cronometro').innerText = horas + ':' + minutos + ':' + segundos;
}