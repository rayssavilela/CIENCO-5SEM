function somar(num1, num2, op){
    if(op == "/" || op == "%"){
        if(num2 == 0){
            document.write("<h2>Divisão por 0</h2>")
        }
    }
    return eval(`${num1} ${op} ${num2}`);
}

function receber(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var op = document.getElementById('op').value;

    document.write("<h1>Resultado:</h1>")
    document.write("<h2>" + somar(num1, num2, op) + "</h2>");
}