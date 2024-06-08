function Calcular(){

    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        document.write("<h1>Aluno Aprovado</h1>");
    }
    else{
        document.write("<h1>Aluno Reprovado</h1>");
    }
}