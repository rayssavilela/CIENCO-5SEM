/*
var quadrado = function (numero){
    return numero * numero;
}
*/

var quadrado = (numero) => {
    return numero * numero;
}


function receber(){
    var n1 = quadrado(parseInt(document.getElementById('num1').value));
    document.write("<h1>Resultado:</h1>" + "<h2>"+ n1 +"</h2>");
}


