function funcao1(){
    var info = {
        nome: 'Luis',
        sobrenome: 'Gomes'
    };
document.write("<h1>Resultado</h1>");
document.write("<h2>" + info.nome + "</h2>");
document.write("<h2>" + info.sobrenome + "</h2>");
}

function receber(){
    var n1 = funcao2(parseInt(document.getElementById('txtNum1').value));

    document.write("<h1>Resultado</h1>");
    document.write("<h2>"+ n1(3) + "</h2>");
    document.write("<h2>"+ funcao2(10)(20) +"</h2>");

}

function funcao2(x){
    return function(y){
        return x + y;
    };
}