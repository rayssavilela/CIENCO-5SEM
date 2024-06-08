function Calcular(){
    var salario = parseFloat(document.getElementById('salario').value);
    var hora = parseFloat(document.getElementById('hora').value);
    var salariobruto;
    var horatrabalhada;
    var salarioreceber;

    horatrabalhada = (salario / 2);

    salariobruto = horatrabalhada * hora;

    salarioreceber = salariobruto - (salariobruto * 0.03);


    document.write("<h1>Seu salário mínimo é R$" + salario + "</h1>");
    document.write("<h1>Suas horas do mês é " + hora + "</h1>");
    document.write("<h1>O valor das suas horas trabalhadas é " + horatrabalhada + "</h1>");
    document.write("<h1>Seu salário bruto é R$" + salariobruto + "</h1>");
    document.write("<h1>Seu salário a receber é R$" + salarioreceber + "</h1>");
    

}