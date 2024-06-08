function Calcular(){

    var nome = document.getElementById('nome').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);
    var media = (nota1 + nota2) / 2;

    if(media >= 7){
        document.write("<h1>O Aluno " + nome + " está Aprovado</h1>");
    }
    else if(media >= 4){
        document.write("<h1>O Aluno " + nome + " terá que fazer SUB</h1>");
    }
    else{
        document.write("<h1>O Aluno " + nome + " está Reprovado</h1>");
    }
}