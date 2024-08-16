var prestaçao = 1000;
var meses = 3;
var juros = 1;

var valor = prestaçao * (1 + (juros / 100) * meses)

console.log('O valor da prestação em atraso é R$ ' + valor)