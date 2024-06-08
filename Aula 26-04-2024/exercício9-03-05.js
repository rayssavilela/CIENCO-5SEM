
var opiniao = 0
var op1 = 0;
var op2 = 0;
var op3 = 0;
var op4 = 0;
var cont = 0;
var perc1 = 0.0;
var perc2 = 0.0;
var perc3 = 0.0;
var perc4 = 0.0;
var percId = 0.0;
var idade = 0;
var totalIdade= 0.0;


function confirmar(){  
    opiniao = parseInt(document.getElementById('opiniao').value);
    idade = parseInt(document.getElementById('idade').value);
    cont++;

    totalIdade = totalIdade  + idade; 

        if (opiniao == 1){
            
            op1 = op1 + 1;
            alert("Você classificou como Ótimo");
           
        }
        else if (opiniao == 2){
            
            op2 = op2 + 1;
            alert("Você classificou como Bom");
           
        }
        else if (opiniao == 3){
            
            op3 = op3 + 1;
            alert("Você classificou como Regular");
        }
        else if (opiniao == 4){
            
            op4 = op4 + 1;
            alert("Você classificou como Ruim");
            
        }

    }

    function finalizar(){

            perc1 = (op1 / cont) * 100;
            perc2 = (op2 / cont) * 100;
            perc3 = (op3 / cont) * 100;
            perc4 = (op4 / cont) * 100;
            percId = totalIdade / cont;

        
            document.getElementById('op1').innerHTML=("<h4> Votos em Ótimo = " + op1 + " /Percentual = " + perc1 + "</h4>");
            document.getElementById('op2').innerHTML=("<h4>Votos em Bom = " + op2 + " /Percentual = " + perc2 + "</h4>");
            document.getElementById('op3').innerHTML=("<h4>Votos em Regular = " + op3 + " /Percentual = " + perc3 + "</h4>");
            document.getElementById('op4').innerHTML=("<h4>Votos em Ruim = " + op4 + " /Percentual = " + perc4 + "</h4>");
            document.getElementById('idade1').innerHTML=("<h4>Média de Idade dos espectadores " + percId + "</h4>");
    }
    

