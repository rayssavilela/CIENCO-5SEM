function Calcular(){
    var salario = parseFloat(document.getElementById('salario').value);
    

    if(salario < 1000)  {

        salario = (salario * 0.15) + salario;
        document.write("<h1>Seu reajuste é R$" + salario + "</h1>");
    }
    else if((salario >= 1000) && (salario <= 1500)) {

        salario = (salario * 0.10) + salario;
        document.write("<h1>Seu reajuste é R$" + salario + "</h1>");
    }
    else if(salario > 1500) {
        salario = (salario * 0.05) + salario;
        document.write("<h1>Seu reajuste é R$" + salario + "</h1>");
    }
    
    else {
        document.write("<h1>Valor inválido, insira novamente!</h1>");
    }

}